import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorDrawer from './routes/NavigatorDrawer';
import { StatusBar } from 'react-native';
import { Colors } from './utils';

const App: React.FC = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(Colors.drawerContentBackground);
  }, []);

  return (
    <NavigationContainer>
      <NavigatorDrawer />
    </NavigationContainer>
  );
};

export default App;
