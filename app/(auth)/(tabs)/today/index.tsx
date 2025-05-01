import { View, Text, Button, SectionList, RefreshControl, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Fab from '@/components/Fab';
import { useToast } from '@masumdev/rn-toast';
import { useSQLiteContext } from 'expo-sqlite';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { projects, todos } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { format } from 'date-fns';
import { Todo } from '@/types/interfaces';

import Animated, { StretchInY, LayoutAnimationConfig } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TaskRow from '@/components/TaskRow';
import { Colors } from '@/constants/Colors';

interface Section {
	title: string;
	data: Todo[];
}

const TodayScreen = () => {
	const db = useSQLiteContext();
	const drizzeDb = drizzle(db);
	const { showToast } = useToast();

	const today = format(new Date(), 'd MMM · eee');
	const [refreshing, setRefreshing] = useState(false);
	const { top } = useSafeAreaInsets();

	const [sectionListData, setSectionListData] = useState<Section[]>([]);

	const { data } = useLiveQuery(
		drizzeDb.select().from(todos).leftJoin(projects, eq(todos.id, projects.id)).where(eq(todos.completed, 0)),
	);

	useEffect(() => {
		const formatedData = data?.map((item) => ({
			...item.todos,
			project_name: item.projects?.name,
			project_color: item.projects?.color,
		}));

		// Group tasks by day
		const groupedByDay = formatedData?.reduce((acc: { [key: string]: Todo[] }, task) => {
			const day = format(new Date(task.due_date || new Date()), 'd MMM · eee');
			if (!acc[day]) {
				acc[day] = [];
			}
			acc[day].push(task);
			return acc;
		}, {});

		// Convert grouped data to sections array
		const listData: Section[] = Object.entries(groupedByDay || {}).map(([day, tasks]) => ({
			title: day,
			data: tasks,
		}));

		// Sort sections by date
		listData.sort((a, b) => {
			const dateA = new Date(a.data[0].due_date || new Date());
			const dateB = new Date(b.data[0].due_date || new Date());
			return dateA.getTime() - dateB.getTime();
		});

		setSectionListData(listData);
	}, [data]);

	const loadTasks = async () => {
		const tasks = await db.getAllAsync<Todo>(`
      SELECT todos.*, projects.name as project_name
      FROM todos
      LEFT JOIN projects ON todos.project_id = projects.id
      WHERE todos.completed = 0
    `);
		if (tasks) {
			const listData = [{ title: today, data: tasks }];
			setSectionListData(listData);
		}
		setRefreshing(false);
	};

	const onPress = () => {
		showToast('Successfully logged into the application', 'error');
	};
	return (
		<>
			<SectionList
				showsVerticalScrollIndicator={false}
				contentInsetAdjustmentBehavior='automatic'
				sections={sectionListData}
				renderItem={({ item }) => (
					<LayoutAnimationConfig>
						<Animated.View entering={StretchInY}>
							<TaskRow task={item} />
						</Animated.View>
					</LayoutAnimationConfig>
				)}
				renderSectionHeader={({ section }) => {
					return <Text style={styles.header}>{section.title}</Text>;
				}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={loadTasks}
					/>
				}
			/>

			<Fab />
		</>
	);
};

export default TodayScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 82,
	},
	header: {
		fontSize: 16,
		backgroundColor: '#fff',
		fontWeight: 'bold',
		padding: 14,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.lightBorder,
	},
});
