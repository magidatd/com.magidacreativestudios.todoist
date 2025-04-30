import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
//import { toast } from 'sonner-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Fab = () => {
	const onPress = () => {};

	return (
		<TouchableOpacity
			style={styles.fab}
			onPress={() => onPress}
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
