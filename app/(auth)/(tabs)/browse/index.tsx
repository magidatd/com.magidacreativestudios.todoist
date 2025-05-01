import { View, Text, Button } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Fab from '@/components/Fab';

const BrowseScreen = () => {
	const { signOut } = useAuth();

	return (
		<>
			<View>
				<Text>Browse Screen</Text>
				<Button
					title='Sign Out'
					onPress={() => signOut()}
				/>
			</View>
			<Fab />
		</>
	);
};

export default BrowseScreen;
