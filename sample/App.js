/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BackgroundImageScreen from './src/components/Background';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BannersScreen from './src/components/Banners';
import DataParsedAndServiceScreen from './src/components/DataParsedAndService';
import CurrentLocationScreen from './src/components/Location';
import SelfieScreen from './src/components/Selfie';
import {NavigationContainer} from '@react-navigation/native';

const TabNavigator = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen
          name="Background"
          component={BackgroundImageScreen}
          options={{
            tabBarLabel: 'Background',
            tabBarIcon: ({colors, size}) => (
              <MaterialCommunityIcons
                name="image-album"
                color={colors}
                size={size}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Banners"
          component={BannersScreen}
          options={{
            tabBarLabel: 'Banners',
            tabBarIcon: ({colors, size}) => (
              <MaterialCommunityIcons
                name="image-multiple"
                color={colors}
                size={size}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="DataParsedAndService"
          component={DataParsedAndServiceScreen}
          options={{
            tabBarLabel: 'Data',
            tabBarIcon: ({colors, size}) => (
              <MaterialCommunityIcons
                name="chart-donut"
                color={colors}
                size={size}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Location"
          component={CurrentLocationScreen}
          options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({colors, size}) => (
              <MaterialCommunityIcons
                name="map-marker"
                color={colors}
                size={size}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Selfie"
          component={SelfieScreen}
          options={{
            tabBarLabel: 'Selfie',
            tabBarIcon: ({colors, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={colors}
                size={size}
              />
            ),
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
