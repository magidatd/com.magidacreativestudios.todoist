import { View, Text, Button } from 'react-native';
import React from 'react';
import Fab from '@/components/Fab';
import { useToast } from '@masumdev/rn-toast';

const TodayScreen = () => {
	const { showToast } = useToast();

	const onPress = () => {
		showToast('Successfully logged into the application', 'error');
	};
	return (
		<>
			<Text>Today Screen</Text>
			<Fab />
		</>
	);
};

export default TodayScreen;
