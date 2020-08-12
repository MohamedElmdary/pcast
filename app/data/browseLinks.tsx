import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Categories from '../components/browse/Categories';
import Topics from '../components/browse/Topics';
import Authors from '../components/browse/Authors';
import Podcasts from '../components/browse/Podcasts';

const PlaceHolder: React.FC = () => {
  return (
    <View>
      <Text>PlaceHolder</Text>
    </View>
  );
};

const iconStyle = {
  size: 22,
  color: 'white',
};

const browseLinks = [
  {
    name: 'Categories',
    route: 'Categories',
    icon: <MaterialCommunityIcon name="view-list" {...iconStyle} />,
    component: Categories,
  },
  {
    name: 'Topics',
    route: 'Topics',
    icon: <FontistoIcon name="world-o" {...iconStyle} />,
    component: Topics,
  },
  {
    name: 'Authors',
    route: 'Authors',
    icon: <FontistoIcon name="slightly-smile" {...iconStyle} />,
    component: Authors,
  },
  {
    name: 'Podcasts',
    route: 'Podcasts',
    icon: <FeatherIcon name="mic" {...iconStyle} />,
    component: Podcasts,
  },
  {
    name: 'Episodes',
    route: 'Episodes',
    icon: <FeatherIcon name="layers" {...iconStyle} />,
    component: PlaceHolder,
  },
];

export { browseLinks };
