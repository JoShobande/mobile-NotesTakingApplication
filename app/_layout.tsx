import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import { AuthProvider, useAuth } from '../context/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* 3️⃣ Render either your auth flow or your app flow */}
      <AuthGuard />
      <StatusBar style="auto" />
    </ThemeProvider>
  </AuthProvider>
  );
}

function AuthGuard() {
  const { user, loading } = useAuth();

  if (loading) {
    // still checking AsyncStorage → keep splash visible, or return null/a loader
    return null;
  }

  return (
    <Stack>
      {user ? (
        // if signed in, show your tabs
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // if not signed in, show the sign-in screen
        <Stack.Screen name="signin" options={{ headerShown: false }} />
      )}
      {/* always register your signup and not-found screens */}
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
