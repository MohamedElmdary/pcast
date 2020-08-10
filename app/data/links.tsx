import React from 'react';

import FontistoIcon from 'react-native-vector-icons/Fontisto';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import { View, Text } from 'react-native';

const PlaceHolder: React.FC = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

const links = [
  {
    name: 'Browse',
    route: 'Browse',
    icon: <FontistoIcon name="world-o" size={18} />,
    component: PlaceHolder,
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
