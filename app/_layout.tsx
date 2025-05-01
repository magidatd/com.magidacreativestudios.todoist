import { Slot, useRouter, useSegments } from 'expo-router';
import { tokenCache } from '@/utils/cache';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Suspense, useEffect } from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { SQLiteProvider, openDatabaseSync } from 'expo-sqlite';
import { Toaster } from '@masumdev/rn-toast';
import { Colors } from '@/constants/Colors';

import migrations from '@/drizzle/migrations';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { addDummyData } from '@/utils/addDummyData';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';

LogBox.ignoreLogs(['Clerk: Clerk has been loaded with development keys']);

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
	throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env');
}

const InitialLayout = () => {
	const { isLoaded, isSignedIn } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	// If the user is signed in, redirect them to the home page
	// If the user is not signed in, redirect them to the login page
	useEffect(() => {
		if (!isLoaded) return;

		const inTabsGroup = segments[0] === '(auth)';

		if (isSignedIn && !inTabsGroup) {
			router.replace('/(auth)/(tabs)/today');
		} else if (!isSignedIn) {
			router.replace('/');
		}
	}, [isSignedIn]);

	return <Slot />;
};

function Loading() {
	return (
		<ActivityIndicator
			size='large'
			color={Colors.primary}
		/>
	);
}

const RootLayoutNav = () => {
	const expoDb = openDatabaseSync('todos.db');

	useDrizzleStudio(expoDb);

	const db = drizzle(expoDb);
	const { success, error } = useMigrations(db, migrations);

	useEffect(() => {
		if (!success) return;
		addDummyData(db);
	}, [success]);

	return (
		<ClerkProvider
			publishableKey={publishableKey}
			tokenCache={tokenCache}
		>
			<Suspense fallback={<Loading />}>
				<SQLiteProvider
					databaseName='todos.db'
					options={{ enableChangeListener: true }}
					useSuspense
				>
					<Toaster
						customColors={{
							success: { background: Colors.successBackground, text: Colors.successText },
							error: { background: Colors.errorBackground, text: Colors.errorText },
							info: { background: Colors.infoBackground, text: Colors.infoText },
						}}
					/>
					<InitialLayout />
				</SQLiteProvider>
			</Suspense>
		</ClerkProvider>
	);
};

export default RootLayoutNav;
