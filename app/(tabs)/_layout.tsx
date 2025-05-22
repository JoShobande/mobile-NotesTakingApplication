import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            height: 80,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
          },
          tabBarBackground: () => <View style={styles.tabBarBg} />,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.8)',
        }}
      >
        <Tabs.Screen 
          name="home" 
          options={{ 
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }} 
        />
        <Tabs.Screen 
          name="folders" 
          options={{ 
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'folder' : 'folder-outline'}
                size={size}
                color={color}
              />
            ),
          }} 
        />
        <Tabs.Screen 
          name="archive" 
          options={{ 
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'folder' : 'archive-outline'}
                size={size}
                color={color}
              />
            ),
          }} 
        />
        <Tabs.Screen 
          name="trash" 
          options={{ 
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'trash' : 'trash-outline'}
                size={size}
                color={color}
              />
            ),
          }} 
        />
      </Tabs>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/newNote')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarBg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#2563EB',      
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: { elevation: 8 },
    }),
  },
  fab: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    borderColor:'white',
    cursor:'pointer'
  },
});
