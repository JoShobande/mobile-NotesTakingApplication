import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CustomTabBar } from '@/components/CustomTabBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color}/> 
        }} 
      />
      <Tabs.Screen 
        name="folders" 
        options={{ 
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color}/> 
        }} 
      />
      <Tabs.Screen 
        name="archive" 
        options={{ 
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color}/> 
        }} 
      />
      <Tabs.Screen 
        name="trash" 
        options={{ 
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color}/> 
        }} 
      />
    </Tabs>
   
  );
}
