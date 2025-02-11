/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {UserProvider} from './src/context/userContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigators/RootNavigator';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/common/RNPToast';
import {KeyboardProvider} from 'react-native-keyboard-controller';

const App1 = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <KeyboardProvider statusBarTranslucent>
        <UserProvider>
          <NavigationContainer ref={navigationRef}>
            <App />
          </NavigationContainer>
        </UserProvider>
      </KeyboardProvider>
      <Toast position="bottom" config={toastConfig} />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => App1);
