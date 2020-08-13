import React from 'react';
import { View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { GlobalStyles, Colors, Fonts } from '../../utils';

const RateBar: React.FC<{ rate: number }> = ({ rate }) => {
  const stars = [];
  let intRate = Math.floor(rate);
  const flootRate = rate - intRate;

  let id = 0;

  for (let i = 0; i < intRate; i++) {
    stars.push(
      <FontAwesomeIcon
        key={id++}
        name="star"
        size={10}
        color={Colors.yellow}
        style={{ marginRight: 8 }}
      />,
    );
  }

  if (flootRate !== 0) {
    intRate++;
    stars.push(
      <FontAwesomeIcon
        key={id++}
        name="star-half-empty"
        size={10}
        color={Colors.yellow}
        style={{ marginRight: 8 }}
      />,
    );
  }

  for (let i = 0; i < 5 - intRate; i++) {
    stars.push(
      <FontAwesomeIcon
        key={id++}
        name="star-o"
        size={10}
        color={Colors.white}
        style={{ marginRight: 8 }}
      />,
    );
  }

  return (
    <View style={GlobalStyles.flexRowCenter}>
      {stars}
      <Text
        style={[
          Fonts.regular,
          { fontSize: 14, color: Colors.gray, textDecorationLine: 'underline' },
        ]}>
        {flootRate !== 0 ? `${intRate - 1},5` : `${intRate},0`}
      </Text>
    </View>
  );
};

export default RateBar;
