import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { browseLinks } from '../data/browseLinks';
import { View } from 'react-native';
import { Colors, Fonts } from '../utils';

const Tab = createMaterialTopTabNavigator();

const BrowseTabBar: React.FC = () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      sceneContainerStyle={{
        backgroundColor: Colors.transparent,
      }}
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: [
          Fonts.medium,
          {
            fontSize: 12,
            textTransform: 'none',
            color: Colors.white,
            transform: [{ translateY: 40 }, { translateX: 17 }],
          },
        ],
        indicatorStyle: {
          backgroundColor: Colors.transparent,
        },
        showIcon: true,
        tabStyle: {
          height: 130,
          transform: [{ translateX: -30 }],
          width: 90,
        },
        style: {
          marginBottom: 30,
          backgroundColor: Colors.transparent,
          elevation: 0,
          shadowColor: Colors.transparent,
          transform: [{ translateY: -35 }],
        },
      }}>
      {browseLinks.map(({ name, route, component, icon }) => {
        return (
          <Tab.Screen
            name={route}
            component={component}
            key={route}
            options={{
              tabBarLabel: name,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      height: 56,
                      width: 56,
                      borderRadius: 56 / 2,
                      backgroundColor: Colors.lightBackground,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: focused ? 1 : 0.7,
                    }}>
                    {icon}
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BrowseTabBar;
