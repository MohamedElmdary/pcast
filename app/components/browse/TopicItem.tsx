import React, { Dispatch } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Topic } from '../../types';
import { Fonts, Colors, GlobalStyles } from '../../utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppActions } from '../../store';

const TopicsItem: React.FC<{ topic: Topic }> = ({ topic }) => {
  const navigation = useNavigation();
  const dispatch: Dispatch<AppActions['pcast']> = useDispatch();

  const { full_name, authorsNo, podcasts, image } = topic;

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
      <TouchableNativeFeedback
        background={{
          borderless: false,
          color: Colors.white,
          type: 'RippleAndroid',
        }}
        onPress={() => {
          dispatch({ type: 'ACTIVE_TOPIC', payload: topic.id });
          navigation.navigate('TopicDetails');
        }}>
        <View
          style={{
            backgroundColor: Colors.opacityDarkBackground,
            padding: 24,
          }}>
          <Text
            numberOfLines={2}
            style={[
              Fonts.medium,
              {
                fontSize: 22,
                maxWidth: '80%',
                lineHeight: 30,
                marginBottom: 24,
              },
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
      </TouchableNativeFeedback>
    </ImageBackground>
  );
};

export default TopicsItem;
