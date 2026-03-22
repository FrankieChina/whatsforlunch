import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';
import CustomTabBar from '@/components/CustomTabBar';

export default function TabLayout() {

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'DISCOVER',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name="safari.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="kitchen"
        options={{
          title: 'KITCHEN',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name="fork.knife" color={color} />,
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: 'GROUPS',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name="person.2.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color, focused }) => (
             <IconSymbol size={24} name="person.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
