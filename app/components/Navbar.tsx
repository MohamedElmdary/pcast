import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Colors } from '../utils';
import SearchModal from './modals/SearchModal';

const logo = require('../../assets/images/pcast-logo.png');

const Navbar: React.FC = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={{ width: 90, height: 42 }} />
        <View style={styles.subContainer}>
          <TouchableNativeFeedback
            onPress={() => {
              setVisible(true);
            }}>
            <FeatherIcon name="search" size={20} color={Colors.white} />
          </TouchableNativeFeedback>
          <View style={{ marginLeft: 48 }} />
          <TouchableNativeFeedback
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <FeatherIcon name="menu" size={20} color={Colors.white} />
          </TouchableNativeFeedback>
        </View>
      </View>
      <SearchModal visible={visible} setVisible={setVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 53,
    paddingHorizontal: 33,
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Navbar;
