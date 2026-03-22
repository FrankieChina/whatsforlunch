import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolateColor } from 'react-native-reanimated';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 4; // We have 4 tabs instead of 5 for now 
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const activeIndex = useSharedValue(state.index);

  useEffect(() => {
    activeIndex.value = withSpring(state.index, { mass: 0.5, damping: 15, stiffness: 120 });
  }, [state.index]);

  const rIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: activeIndex.value * TAB_WIDTH }],
    };
  });

  const bgColors = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

  const rBackgroundStyle = useAnimatedStyle(() => {
    // We animate background color slightly based on state.index (assuming 1 to 1 mapping or fallback to fixed color)
    return {
       // backgroundColor: bgColors[state.index % bgColors.length]
    }
  });

  return (
    <View style={styles.tabContainer}>
      {/* Background SVG Curve that slides */}
      <Animated.View style={[styles.curveWrapper, rIndicatorStyle]}>
        <Svg width={TAB_WIDTH * 1.5} height={60} viewBox="0 0 202.9 45.5" style={styles.svgCurve}>
           <Path
            fill="#F9F6F0" // Background color of the tab bar itself (cutout is inverted)
            d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5c9.2,3.6,17.6,4.2,23.3,4H6.7z"
          />
        </Svg>
      </Animated.View>

      <View style={styles.tabItemsContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          
          if (route.name === 'explore') return null; // hide explore if it exists

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={styles.tabItem}
              activeOpacity={1}
            >
              {options.tabBarIcon && options.tabBarIcon({ 
                focused: isFocused, 
                color: isFocused ? '#FFFFFF' : '#9CA3AF', 
                size: 24 
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 80,
    backgroundColor: '#1d1d27',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  curveWrapper: {
    position: 'absolute',
    top: -30, // push up over the edge
    left: (TAB_WIDTH / 2) - ((TAB_WIDTH * 1.5) / 2),
    width: TAB_WIDTH * 1.5,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgCurve: {
    position: 'absolute',
    bottom: 0,
  },
  tabItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  tabItem: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  }
});
