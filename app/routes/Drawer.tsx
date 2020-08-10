import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { user, UserActivities } from '../data';
import { Fonts, Colors } from '../utils';

import IonIcon from 'react-native-vector-icons/Ionicons';

import DrawerLink from '../components/drawer/DrawerLink';
import UserActivity from '../components/drawer/UserActivity';
import { links } from '../data/links';

interface Props {
  drawer: DrawerContentComponentProps<DrawerContentOptions>;
}

const AppDrawer: React.FC<Props> = ({ drawer }) => {
  // console.log(drawer.state.routeNames);

  return (
    <ScrollView>
      <View style={{ height: '100%' }}>
        <View style={[styles.drawerContent, styles.drawerContent1]}>
          <View style={styles.header}>
            <Text
              numberOfLines={2}
              ellipsizeMode="clip"
              style={[Fonts.medium, { fontSize: 24 }]}>
              {'Hello,\n' + user.name}!
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ position: 'relative' }}>
                <View style={styles.notificationWrapper}>
                  <View style={styles.notification} />
                </View>
                <IonIcon
                  name="notifications-outline"
                  size={25}
                  color={Colors.white}
                />
              </View>
              <TouchableNativeFeedback
                onPress={() => {
                  drawer.navigation.goBack();
                }}>
                <IonIcon
                  style={{ marginLeft: 40 }}
                  name="close-sharp"
                  size={25}
                  color={Colors.white}
                />
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.bottomHeader}>
            <View>
              <Image
                source={user.image}
                style={{ height: 32, width: 32, borderRadius: 16 }}
              />
            </View>
            {UserActivities.map(({ name, value }) => (
              <UserActivity name={name} value={value} key={name} />
            ))}
          </View>
        </View>
        <View style={[styles.drawerContent, styles.drawerContent2]}>
          {links.map((link) => (
            <DrawerLink
              {...link}
              key={link.name}
              onPress={() => {
                drawer.navigation.navigate(link.route);
              }}
            />
          ))}
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(Colors.darkBackground)}
            onPress={() => {
              drawer.navigation.goBack(); // for now
              console.log('Logout');
            }}>
            <View style={styles.btn}>
              <View />
              <Text style={[Fonts.medium, { fontSize: 16 }]}>Loutout</Text>
              <IonIcon name="exit-outline" size={16} color={Colors.gray} />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: Colors.drawerContentBackground,
    paddingLeft: 40,
  },
  drawerContent1: {
    paddingTop: 58,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    marginBottom: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 33,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    paddingBottom: 24,
    marginBottom: 24,
  },
  notificationWrapper: {
    zIndex: 9,
    height: 14,
    width: 14,
    backgroundColor: Colors.drawerContentBackground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 7,
  },
  notification: {
    height: 8,
    width: 8,
    backgroundColor: Colors.red,
    borderRadius: 4,
  },
  bottomHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 33,
  },
  drawerContent2: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: Colors.drawerContentBackground,
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 40,
    flexGrow: 1,
  },
  btn: {
    backgroundColor: Colors.lightBackground,
    borderRadius: 24,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 50,
  },
});

export default AppDrawer;
