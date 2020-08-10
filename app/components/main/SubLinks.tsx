import React from 'react';
import { Text, View } from 'react-native';
import { Fonts, Colors, GlobalStyles } from '../../utils';

const SubLinks: React.FC<{ links: string[] }> = ({ links }) => {
  return (
    <View style={[GlobalStyles.flexRowCenter, { marginBottom: 40 }]}>
      {links.map((t, i) => (
        <Text
          key={t}
          style={[
            Fonts.regular,
            {
              color: i === 0 ? Colors.blue : Colors.gray,
              fontSize: 16,
              marginRight: 24,
            },
          ]}>
          {t}
        </Text>
      ))}
    </View>
  );
};

export default SubLinks;
