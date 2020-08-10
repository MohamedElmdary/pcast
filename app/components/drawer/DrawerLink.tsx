import React from 'react';
import { Text, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Fonts, Colors } from '../../utils';

const DrawerLink: React.FC<{
  name: string;
  route: string;
  icon: JSX.Element;
}> = ({ name, route, icon }) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(Colors.lightBackground)}
      onPress={() => {
        console.log('navigate to ', route);
      }}>
      <View style={styles.container}>
        <Text style={[styles.icon, { color: Colors.gray }]}>{icon}</Text>
        <Text style={[Fonts.medium, { fontSize: 14 }]}>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 30,
  },
});

export default DrawerLink;
