import React from 'react';
import { View, Image, Text } from 'react-native';
import { Author } from '../../types';
import { Colors, Fonts } from '../../utils';

const AuthorItem: React.FC<{ author: Author }> = ({
  author: { image, color, name, podcasts },
}) => {
  return (
    <View
      style={{
        borderRadius: 24,
        borderBottomRightRadius: 0,
        backgroundColor: Colors[color],
        height: 100,
        position: 'relative',
        marginBottom: 50,
        padding: 16,
        paddingLeft: 117 + 50,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 16,
        }}>
        <Image source={image} style={{ width: 117, height: 158 }} />
      </View>
      <View>
        <Text style={[Fonts.medium, { fontSize: 18, marginBottom: 8 }]}>
          {name}
        </Text>
        <Text style={[Fonts.regular, { fontSize: 13 }]}>
          Podcasts: {podcasts}
        </Text>
      </View>
    </View>
  );
};

export default AuthorItem;
