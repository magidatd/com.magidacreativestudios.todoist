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
		</Stack>
	);
};

export default AuthLayout;
