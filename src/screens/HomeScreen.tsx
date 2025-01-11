import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CourseList from './CourseList';
import Header from './Header';
import CartProvider from '../data/Cardprovider';

// Placeholder components for other tabs
const ProfileScreen = () => (
  <View style={styles.screen}>
     <Header />
    <MaterialCommunityIcons name="account" size={80} color="#3498db" />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
     <Header />
    <MaterialCommunityIcons name="cog" size={80} color="#3498db" />
  </View>
);

const HomeContent = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <CourseList />
  </View>
);

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <CartProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#f5f5f5' },
          tabBarActiveTintColor: '#3498db',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeContent}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
