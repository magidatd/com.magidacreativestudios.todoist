import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const Fab = () => {
	const router = useRouter();

	const onPress = () => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		router.push('/task/new');
	};

	return (
		<TouchableOpacity
			style={styles.fab}
			onPress={() => onPress()}
		>
			<Ionicons
				name='add'
				size={28}
				style={styles.icon}
			/>
		</TouchableOpacity>
	);
};

export default Fab;

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		zIndex: 100,
		bottom: 24,
		right: 14,
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
	},
	icon: {
		color: Colors.background,
	},
});
