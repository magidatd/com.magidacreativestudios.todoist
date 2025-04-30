import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';
import React from 'react';
import { Header } from '@react-navigation/elements';

const SearchLayout = () => {
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
					title: 'Search',
					header: ({ options }) => (
						<Header
							{...options}
							title={options.title || 'Search'}
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
					headerSearchBarOptions: {
						shouldShowHintSearchIcon: false,
						placeholder: 'Tasks, Projects and More.',
						headerIconColor: Colors.primary,
						tintColor: Colors.primary,
						hideNavigationBar: true,
					},
				}}
			/>
		</Stack>
	);
};

export default SearchLayout;
