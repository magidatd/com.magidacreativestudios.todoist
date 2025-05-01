import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { Todo } from '@/types/interfaces';
import { useSQLiteContext } from 'expo-sqlite';
import { useRef } from 'react';
import { Colors } from '@/constants/Colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Link, useRouter } from 'expo-router';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
	SharedValue,
	useAnimatedStyle,
	runOnJS,
	useAnimatedReaction,
	configureReanimatedLogger,
	ReanimatedLogLevel,
	useSharedValue,
	withTiming,
	Easing,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useMMKVString } from 'react-native-mmkv';
import React from 'react';

const TaskRow = () => {
	return (
		<View>
			<Text>TaskRow</Text>
		</View>
	);
};

export default TaskRow;
