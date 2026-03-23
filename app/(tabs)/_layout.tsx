import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import CustomTabBar from '@/components/CustomTabBar';
import { PreferencesProvider } from '@/context/PreferencesContext';

export default function TabLayout() {

  return (
    <PreferencesProvider>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'KITCHEN',
            tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name="fork.knife" color={color} />,
          }}
        />
        <Tabs.Screen
          name="social"
          options={{
            title: 'SOCIAL',
            tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name="person.fill" color={color} />,
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
               <IconSymbol size={24} name="person.crop.circle" color={color} />
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
    </PreferencesProvider>
  );
}
