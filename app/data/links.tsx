import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import { View, Text } from 'react-native';

import Main from '../screens/Main';
import Browse from '../screens/Browse';

const PlaceHolder: React.FC = () => {
  return (
    <View>
      <Text>PlaceHolder</Text>
    </View>
  );
};

const links = [
  {
    name: 'Home',
    route: 'Main',
    icon: <AntDesignIcon name="home" size={18} />,
    component: Main,
  },
  {
    name: 'Browse',
    route: 'Browse',
    icon: <FontistoIcon name="world-o" size={18} />,
    component: Browse,
  },
  {
    name: 'Subscribed',
    route: 'Subscribed',
    icon: <SimpleLineIcon name="eye" size={18} />,
    component: PlaceHolder,
  },
  {
    name: 'Favourites',
    route: 'Favourites',
    icon: <SimpleLineIcon name="heart" size={18} />,
    component: PlaceHolder,
  },
  {
    name: 'History',
    route: 'History',
    icon: <MaterialIcon name="history" size={18} />,
    component: PlaceHolder,
  },
  {
    name: 'Payments',
    route: 'Payments',
    icon: <EvilIcon name="credit-card" size={18} />,
    component: PlaceHolder,
  },
  {
    name: 'Account settings',
    route: 'Settings',
    icon: <OctIcon name="settings" size={18} />,
    component: PlaceHolder,
  },
];

export { links };
