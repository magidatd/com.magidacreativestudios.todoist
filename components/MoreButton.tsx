import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import * as DropdownMenu from 'zeego/dropdown-menu';
import * as Clipboard from 'expo-clipboard';
import { useToast } from '@masumdev/rn-toast';
import { Ionicons } from '@expo/vector-icons';

type MoreButtonProps = {
	pageName: string;
};

const MoreButton = ({ pageName }: MoreButtonProps) => {
	const { showToast } = useToast();

	const copyToClipboard = async () => {
		const path = `com.magidacreativestudios.todoist://(auth)/(tabs)/${pageName.toLowerCase()}`;

		await Clipboard.setStringAsync(path);

		showToast('Copied to clipboard', 'info');
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<TouchableOpacity style={styles.button}>
					<Ionicons
						name='ellipsis-horizontal-outline'
						size={30}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content>
				<DropdownMenu.Item
					key='link'
					onSelect={copyToClipboard}
				>
					<DropdownMenu.ItemTitle>Copy</DropdownMenu.ItemTitle>
				</DropdownMenu.Item>

				<DropdownMenu.Group>
					<DropdownMenu.Item key='select'>
						<DropdownMenu.ItemTitle>Select Tasks</DropdownMenu.ItemTitle>
					</DropdownMenu.Item>
					<DropdownMenu.Item key='view'>
						<DropdownMenu.ItemTitle>View</DropdownMenu.ItemTitle>
					</DropdownMenu.Item>
					<DropdownMenu.Item key='activty'>
						<DropdownMenu.ItemTitle>Activity Log</DropdownMenu.ItemTitle>
					</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default MoreButton;

const styles = StyleSheet.create({
	button: {
		padding: 8,
		borderRadius: 4,
		marginRight: 10,
	},
});
