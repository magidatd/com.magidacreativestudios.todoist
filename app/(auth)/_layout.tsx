import React from 'react';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

const AuthLayout = () => {
	return (
		<Stack screenOptions={{ contentStyle: { backgroundColor: Colors.background } }}>
			<Stack.Screen
				name='(tabs)'
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='task/new'
				options={{ presentation: 'modal' }}
			/>
		</Stack>
	);
};

export default AuthLayout;
