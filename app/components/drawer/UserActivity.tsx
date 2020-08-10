import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';

const UserActivity: React.FC<{ name: string; value: string | number }> = ({
  name,
  value,
}) => {
  return (
    <View>
      <Text style={[Fonts.regular, { fontSize: 12 }]}>{name}:</Text>
      <Text style={[Fonts.regular, { color: Colors.gray, fontSize: 12 }]}>
        {value}
      </Text>
    </View>
  );
};

export default UserActivity;
