import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Category } from '../../types';
import { Colors, Fonts } from '../../utils';

const CategoryItem: React.FC<{ category: Category }> = ({
  category: {
    name,
    gradient: { colors, start, end },
  },
}) => {
  return (
    <View
      style={{
        width: '47%',
        padding: 16,
        backgroundColor: Colors.lightBackground,
        borderRadius: 16,
        borderBottomRightRadius: 0,
        marginBottom: 16,
      }}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{
          height: 50,
          width: 50,
          marginBottom: 20,
          borderRadius: 16,
          borderBottomRightRadius: 0,
        }}
      />
      <Text style={[Fonts.medium, { fontSize: 16 }]}>
        {/* \n */}
        {name}
      </Text>
    </View>
  );
};

export default CategoryItem;
