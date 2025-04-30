import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MoreButton from '@/components/MoreButton';
import { Header } from '@react-navigation/elements';
import React from 'react';

const TodayLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerShadowVisible: false,
				contentStyle: { backgroundColor: Colors.background },
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Today',
					header: ({ options }) => (
						<Header
							{...options}
							title={options.title || 'Today'}
							headerStyle={{
								height: 65,
							}}
						/>
					),
					headerTitleStyle: {
						fontFamily: 'Nunito',
						fontWeight: 'bold',
						fontSize: 30,
					},
					headerRight: () => <MoreButton />,
				}}
			/>
		</Stack>
	);
};

export default TodayLayout;
