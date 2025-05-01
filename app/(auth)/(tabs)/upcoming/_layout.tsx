import React from 'react';
import { Header } from '@react-navigation/elements';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MoreButton from '@/components/MoreButton';

const UpcomingLayout = () => {
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
					title: 'Upcoming',
					header: ({ options }) => (
						<Header
							{...options}
							title={options.title || 'Upcoming'}
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
					headerRight: () => <MoreButton pageName='Upcoming' />,
				}}
			/>
		</Stack>
	);
};

export default UpcomingLayout;
