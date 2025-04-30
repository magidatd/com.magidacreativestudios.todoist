import { View, Text, Button } from 'react-native';
import React from 'react';
import Fab from '@/components/Fab';

const TodayScreen = () => {
	const onPress = () => {};
	return (
		<>
			<Button
				title='Press Me'
				onPress={onPress}
			/>
			<Text>Today Screen</Text>
			<Fab />
		</>
	);
};

export default TodayScreen;
