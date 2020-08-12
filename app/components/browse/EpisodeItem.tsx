import React from 'react';
import { Episode } from '../../types';
import { View, Text } from 'react-native';
import { Colors, GlobalStyles, Fonts } from '../../utils';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

const EpisodeItem: React.FC<{ episode: Episode }> = ({
  episode: { name, podcast, length, size, description },
}) => {
  return (
    <View
      style={{
        backgroundColor: '#070D15',
        marginBottom: 16,
        borderRadius: 5,
        padding: 16,
      }}>
      <View style={GlobalStyles.flexRowCenter}>
        <View style={{ width: 60, display: 'flex', alignItems: 'center' }}>
          <View
            style={{
              height: 32,
              width: 32,
              borderRadius: 32 / 2,
              backgroundColor: Colors.blue,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FeatherIcon
              name="play"
              size={16}
              color={Colors.white}
              style={{ marginLeft: 3 }}
            />
          </View>
        </View>
        <View style={{ flexGrow: 1 }}>
          <View
            style={[
              GlobalStyles.flexRowCenter,
              { justifyContent: 'space-between' },
            ]}>
            <Text style={[Fonts.medium, { fontSize: 14 }]}>{name}</Text>
            <Text style={[Fonts.regular, { fontSize: 12, color: Colors.gray }]}>
              {length.join(':')}
            </Text>
          </View>
          <View
            style={[
              GlobalStyles.flexRowCenter,
              { justifyContent: 'space-between' },
            ]}>
            <Text
              numberOfLines={1}
              style={[
                Fonts.regular,
                { fontSize: 12, color: Colors.gray, maxWidth: '70%' },
              ]}>
              {podcast.name}
            </Text>
            <Text
              style={[
                Fonts.regular,
                {
                  fontSize: 12,
                  color: Colors.gray,
                },
              ]}>
              {size}mb
            </Text>
          </View>
        </View>
        <View style={{ width: 60, display: 'flex', alignItems: 'center' }}>
          <View
            style={{
              height: 32,
              width: 32,
              borderRadius: 32 / 2,
              backgroundColor: Colors.lightBackground,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesignIcon name="download" size={16} color={Colors.white} />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          style={[
            Fonts.regular,
            {
              color: Colors.gray,
              fontSize: 12,
              paddingLeft: 60,
              lineHeight: 18,
            },
          ]}
          numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default EpisodeItem;
