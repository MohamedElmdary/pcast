import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawer from './Drawer';
import { Colors } from '../utils';
import { links } from '../data/links';

const Drawer = createDrawerNavigator();

const NavigatorDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: 'transparent',
        width: '80%',
      }}
      initialRouteName="Browse"
      drawerContent={(props) => <AppDrawer drawer={props} />}
      overlayColor={Colors.drawerBackground}>
      {links.map(({ name, route, component }) => (
        <Drawer.Screen name={route} key={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
};

export default NavigatorDrawer;
