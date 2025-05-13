// components/CustomTabBar.tsx
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function CustomTabBar(props: BottomTabBarProps) {
  return (
    <View style={styles.wrapper}>

        <Text>tab</Text>
      {/* <View style={styles.background} /> */}


      {/* <BottomTabBar 
        {...props} 
        style={styles.tabBar} 
      /> */}


      {/* <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate('new')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity> */}
    </View>
  );
}

const TAB_BAR_HEIGHT = 70;
const FAB_SIZE = 60;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: TAB_BAR_HEIGHT + FAB_SIZE / 2,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: TAB_BAR_HEIGHT,
    backgroundColor: '#2A5D4E',    // your green
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: -3 }, shadowRadius: 8 },
      android: { elevation: 8 },
    }),
  },
  tabBar: {
    backgroundColor: 'transparent', // we drew it ourselves
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0,
    height: TAB_BAR_HEIGHT,
  },
  fab: {
    position: 'absolute',
    bottom: TAB_BAR_HEIGHT - FAB_SIZE / 2,
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    backgroundColor: '#2A5D4E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
