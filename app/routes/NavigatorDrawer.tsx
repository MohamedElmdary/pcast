import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawer from './Drawer';
import { Colors } from '../utils';
import { links } from '../data/links';

import TopicDetails from '../screens/TopicDetails';
import AuthorDetails from '../screens/AuthorDetails';

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
      {/* not included in drawer */}
      <Drawer.Screen name="TopicDetails" component={TopicDetails} />
      <Drawer.Screen name="AuthorDetails" component={AuthorDetails} />
    </Drawer.Navigator>
  );
};

export default NavigatorDrawer;
