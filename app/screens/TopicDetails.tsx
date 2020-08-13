import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { createSelector } from 'reselect';

import Navbar from '../components/Navbar';
import { AppState } from '../store';
import { Topic } from '../types';
import { useSelector } from 'react-redux';
import { Colors, Fonts, GlobalStyles } from '../utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import SubLinks from '../components/main/SubLinks';
import TopicsItem from '../components/browse/TopicItem';

const TopicDetails: React.FC = () => {
  const topic = useSelector(
    createSelector(
      (s: AppState) => s.pcast.topics,
      (s: AppState) => s.pcast.activeTopic,
      (topics: Topic[], id: number) => topics.find((t) => t.id === id),
    ),
  );

  const topics = useSelector((s: AppState) => s.pcast.topics);

  return (
    <ScrollView>
      <ImageBackground
        source={topic?.image ?? { uri: 'http://placehold.it/350x1000' }}
        style={{ height: '100%', width: '100%' }}>
        <View
          style={{
            backgroundColor: Colors.opacityDarkBackground,
            height: '100%',
          }}>
          <Navbar />
          <View style={{ paddingHorizontal: 33 }}>
            <Text style={[Fonts.bold, { fontSize: 48, marginBottom: 24 }]}>
              Positive psychology
            </Text>
            <View style={[GlobalStyles.flexRowCenter, { marginBottom: 56 }]}>
              <View style={[GlobalStyles.flexRowCenter, { marginRight: 32 }]}>
                <FeatherIcon name="user" size={16} color={Colors.gray} />
                <Text
                  style={[
                    Fonts.regular,
                    { color: Colors.gray, fontSize: 14, marginLeft: 8 },
                  ]}>
                  Authors: {topic?.authorsNo}
                </Text>
              </View>
              <View style={GlobalStyles.flexRowCenter}>
                <FeatherIcon name="mic" size={16} color={Colors.gray} />
                <Text
                  style={[
                    Fonts.regular,
                    { color: Colors.gray, fontSize: 14, marginLeft: 8 },
                  ]}>
                  Podcasts: {topic?.podcasts}
                </Text>
              </View>
            </View>
            <View style={[GlobalStyles.flexRowCenter, { marginBottom: 40 }]}>
              <TouchableNativeFeedback
                onPress={() => {
                  console.log('subscribe');
                }}
                style={{
                  marginRight: 24,
                  width: 155,
                  backgroundColor: Colors.blue,
                  borderRadius: 99,
                  height: 51,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <Text style={[Fonts.medium, { fontSize: 16 }]}>
                  {/* \n */}
                  Subscribe
                </Text>
              </TouchableNativeFeedback>
              <Text style={[Fonts.medium, { fontSize: 16 }]}>
                +{(topic?.followers ?? 0) / 1000}k followers
              </Text>
            </View>
            <SubLinks links={['Recent', 'Authors', 'Popular']} />
            {topics?.map((topic) => (
              <TopicsItem topic={topic} key={topic.id} />
            ))}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default TopicDetails;
