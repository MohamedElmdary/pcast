import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Colors, Fonts } from '../utils';
import Navbar from '../components/Navbar';
import SearchInput from '../components/modals/SearchInput';

const Browse: React.FC = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={{ paddingHorizontal: 33 }}>
        <Text style={[Fonts.bold, { fontSize: 48, marginBottom: 32 }]}>
          Browse
        </Text>
        <SearchInput
          background={Colors.darkInputBackground}
          onChangeText={() => null}
        />
      </View>
      <View></View>
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
