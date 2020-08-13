import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { AppState } from '../store';
import Navbar from '../components/Navbar';
import { Colors, Fonts, GlobalStyles } from '../utils';
import { DrawerScreenProps } from '@react-navigation/drawer';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import RateBar from '../components/AuthorDetails/RateBar';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import SubLinks from '../components/main/SubLinks';
import EpisodeItem from '../components/browse/EpisodeItem';

const AuthorDetails: React.FC<DrawerScreenProps<{}>> = ({ navigation }) => {
  const author = useSelector(
    createSelector(
      (s: AppState) => s.pcast.tabAuthors,
      (s: AppState) => s.pcast.activeAuthor,
      (authors, id) => authors.find((a) => a.id === id),
    ),
  );
  const episodes = useSelector((s: AppState) => s.pcast.episodes);

  const [more, setMore] = useState<boolean>(false);

  function shorten(txt: string) {
    if (!more && txt.length > 170) {
      return txt.slice(0, 170) + '...';
    }
    return txt;
  }

  return (
    <ScrollView>
      <View style={{ height: '100%' }}>
        <View
          style={{
            backgroundColor: Colors[author?.color ?? 'blue'],
          }}>
          <Navbar
            onClick={() => {
              navigation.goBack();
            }}
          />
          <Text
            style={[
              Fonts.bold,
              { fontSize: 48, marginLeft: 33, marginBottom: 24 },
            ]}>
            {author?.name}
          </Text>
          <View
            style={[
              GlobalStyles.flexRowCenter,
              { paddingLeft: 33, marginBottom: 24 },
            ]}>
            <AntDesignIcon
              name="facebook-square"
              size={20}
              color={Colors.white}
            />
            <AntDesignIcon
              name="instagram"
              size={20}
              color={Colors.white}
              style={{ marginHorizontal: 28 }}
            />
            <AntDesignIcon name="twitter" size={20} color={Colors.white} />
          </View>
          <View
            style={[
              GlobalStyles.flexRowCenter,
              { paddingLeft: 33, paddingBottom: 30 },
            ]}>
            <FeatherIcon name="mic" size={16} color={Colors.white} />
            <Text style={[Fonts.regular, { fontSize: 14, marginLeft: 8 }]}>
              Podcasts: {author?.podcasts}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightBackground,
            paddingVertical: 24,
            paddingLeft: 33,
            position: 'relative',
          }}>
          <RateBar rate={3.5} />
          <Image
            source={author?.image ?? { uri: 'http://placehold.it/350x1000' }}
            style={{
              height: 245,
              width: 217,
              position: 'absolute',
              bottom: 0,
              right: -8,
            }}
          />
        </View>
        <View
          style={{
            position: 'relative',
            paddingHorizontal: 33,
            backgroundColor: Colors.darkBackground,
            paddingTop: 50,
          }}>
          <View style={{ marginBottom: 35 }}>
            <Text
              numberOfLines={more ? undefined : 4}
              style={[
                Fonts.regular,
                {
                  color: Colors.gray,
                  fontSize: 13,
                  lineHeight: 20,
                },
              ]}>
              {shorten(author?.description ?? '')}
            </Text>
            {more ? null : (
              <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <TouchableNativeFeedback
                  style={{ transform: [{ translateY: -15 }] }}
                  onPress={() => {
                    setMore(true);
                  }}>
                  <View
                    style={[
                      GlobalStyles.flexRowCenter,
                      {
                        alignItems: 'center',
                      },
                    ]}>
                    <Text
                      style={[
                        Fonts.medium,
                        { color: '#DADADA', fontSize: 13, marginRight: 13 },
                      ]}>
                      Read more
                    </Text>
                    <SimpleLineIcon
                      name="arrow-down"
                      size={11}
                      color="#DADADA"
                    />
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
          <View style={[GlobalStyles.flexRowCenter, { marginBottom: 42 }]}>
            <TouchableNativeFeedback
              style={{
                height: 51,
                width: 131,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.blue,
                borderRadius: 99,
                marginRight: 24,
              }}>
              <Text style={[Fonts.medium, { fontSize: 16 }]}>Follow</Text>
            </TouchableNativeFeedback>
            <Text style={[Fonts.medium, { fontSize: 14 }]}>
              +{(author?.followers ?? 0) / 1000}k followers
            </Text>
          </View>
          <SubLinks links={['Recent', 'Popular', 'As guest']} />
          {episodes.map((e) => (
            <EpisodeItem episode={e} key={e.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthorDetails;
