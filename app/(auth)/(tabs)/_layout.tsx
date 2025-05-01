import { Tabs } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { Colors } from '@/constants/Colors';
import Icon from '@react-native-vector-icons/material-design-icons';

const TabsPage = () => {
	const { isSignedIn } = useAuth();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary,
				tabBarInactiveTintColor: Colors.dark,
			}}
		>
			<Tabs.Screen
				name='today'
				options={{
					title: 'Today',
					// Todo fix icons with FA6
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='calendar'
							size={size}
							color={color}
						/>
					),
				}}
				redirect={!isSignedIn}
			/>
			<Tabs.Screen
				name='upcoming'
				options={{
					title: 'Upcoming',
					// Todo fix icons with FA6
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='calendar-search'
							size={size}
							color={color}
						/>
					),
				}}
				redirect={!isSignedIn}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					// Todo fix icons with FA6
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='magnify-expand'
							size={size}
							color={color}
						/>
					),
				}}
				redirect={!isSignedIn}
			/>
			<Tabs.Screen
				name='browse'
				options={{
					title: 'Browse',
					// Todo fix icons with FA6
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='text-box-search-outline'
							size={size}
							color={color}
						/>
					),
				}}
				redirect={!isSignedIn}
			/>
		</Tabs>
	);
};

export default TabsPage;
