import { Colors } from '@/constants/Colors';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { Image, StyleSheet } from 'react-native';
//import Icon from '@react-native-vector-icons/material-design-icons';
import { useUser } from '@clerk/clerk-expo';

const BrowseLayout = () => {
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
					title: 'Browse',
					header: ({ options }) => (
						<Header
							{...options}
							title={options.title || 'Browse'}
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
					headerLeft: () => <HeaderLeft />,
					headerRight: () => <HeaderRight />,
				}}
			/>
		</Stack>
	);
};

export default BrowseLayout;

const HeaderLeft = () => {
	const { user } = useUser();

	return (
		<Image
			source={{ uri: user?.imageUrl }}
			style={styles.image}
		/>
	);
};

const HeaderRight = () => {
	return (
		<Link
			href='/(auth)/(tabs)/browse/settings'
			style={styles.link}
		>
			{/* <Icon
				name='cog-outline'
				size={24}
				color={Colors.primary}
			/> */}
		</Link>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 32,
		height: 32,
		borderRadius: 16,
		marginLeft: 10,
		marginRight: 5,
	},
	link: {
		marginRight: 10,
	},
});
