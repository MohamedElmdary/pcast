import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Topic } from '../../types';
import { Fonts, Colors, GlobalStyles } from '../../utils';
import FeatherIcon from 'react-native-vector-icons/Feather';

const TopicsItem: React.FC<{ topic: Topic }> = ({
  topic: { full_name, authorsNo, podcasts, image },
}) => {
  return (
    <ImageBackground
      source={image}
      style={{
        width: '100%',
        marginBottom: 24,
        borderRadius: 24,
        overflow: 'hidden',
        borderBottomRightRadius: 0,
      }}>
      <View
        style={{ backgroundColor: Colors.opacityDarkBackground, padding: 24 }}>
        <Text
          numberOfLines={2}
          style={[
            Fonts.medium,
            { fontSize: 22, maxWidth: '80%', lineHeight: 30, marginBottom: 24 },
          ]}>
          {full_name}
        </Text>
        <View style={GlobalStyles.flexRowCenter}>
          <View style={GlobalStyles.flexRowCenter}>
            <FeatherIcon name="user" size={16} color={Colors.gray} />
            <Text
              style={[
                Fonts.regular,
                { fontSize: 14, color: Colors.gray, marginLeft: 8 },
              ]}>
              Authors: {authorsNo}
            </Text>
          </View>
          <View style={[GlobalStyles.flexRowCenter, { marginLeft: 16 }]}>
            <FeatherIcon name="mic" size={16} color={Colors.gray} />
            <Text
              style={[
                Fonts.regular,
                { fontSize: 14, color: Colors.gray, marginLeft: 8 },
              ]}>
              Podcasts: {podcasts}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TopicsItem;
