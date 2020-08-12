import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { Colors, Fonts } from '../utils';
import Navbar from '../components/Navbar';
import SearchInput from '../components/modals/SearchInput';
import BrowseTabBar from '../routes/BrowseTabBar';

const Browse: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <View style={{ paddingHorizontal: 33, marginBottom: 33 }}>
          <Text style={[Fonts.bold, { fontSize: 48, marginBottom: 32 }]}>
            Browse
          </Text>
          <SearchInput
            background={Colors.darkInputBackground}
            onChangeText={() => null}
            autoFocus={false}
          />
        </View>
        <View style={{ paddingLeft: 33 }}>
          <BrowseTabBar />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.darkBackground,
  },
});

export default Browse;
