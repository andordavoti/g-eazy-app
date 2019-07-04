import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarMaterialIcons from '../components/TabBarMaterialIcons';
import TabBarMaterialCommunityIcon from '../components/TabBarMaterialCommunityIcons';
import AlbumsScreen from '../screens/AlbumsScreen';
import EPsScreen from '../screens/EPsScreen';
import MixtapesScreen from '../screens/MixtapesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AlbumStack = createStackNavigator(
  {
    Home: AlbumsScreen,
  },
  config
);

AlbumStack.navigationOptions = {
  tabBarLabel: 'Albums',
  tabBarOptions: { activeTintColor: 'black' },
  tabBarIcon: ({ focused }) => (
    <TabBarMaterialIcons focused={focused} name='album' />),
};

AlbumStack.path = '';

const EPsStack = createStackNavigator(
  {
    EPs: EPsScreen,
  },
  config
);

EPsStack.navigationOptions = {
  tabBarLabel: 'EPs',
  tabBarOptions: { activeTintColor: 'black' },
  tabBarIcon: ({ focused }) => (
    <TabBarMaterialIcons focused={focused} name='library-music' />),
};

EPsStack.path = '';




const MixtapesStack = createStackNavigator(
  {
    Mixtapes: MixtapesScreen,
  },
  config
);

MixtapesStack.navigationOptions = {
  tabBarLabel: 'Mixtapes',
  tabBarOptions: { activeTintColor: 'black' },
  tabBarIcon: ({ focused }) => (
    <TabBarMaterialCommunityIcon focused={focused} name='cassette' />),
};

MixtapesStack.path = '';



const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: { activeTintColor: 'black' },
  tabBarIcon: ({ focused }) => (
    <TabBarMaterialIcons focused={focused} name='settings' />),
};

SettingsStack.path = '';



const tabNavigator = createBottomTabNavigator({
  AlbumStack,
  EPsStack,
  MixtapesStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
