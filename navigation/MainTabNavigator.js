import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarMaterialIcons from '../components/TabBarMaterialIcons';
import TabBarMaterialCommunityIcon from '../components/TabBarMaterialCommunityIcons';
import AlbumsScreen from '../screens/AlbumsScreen';
import EPsScreen from '../screens/EPsScreen';
import MixtapesScreen from '../screens/MixtapesScreen';
import TourScreen from '../screens/TourScreen';
import AboutScreen from '../screens/AboutScreen';

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


const TourStack = createStackNavigator(
  {
    Tour: TourScreen,
  },
  config
);

TourStack.navigationOptions = {
  tabBarLabel: 'Tour',
  tabBarOptions: { activeTintColor: 'black' },
  tabBarIcon: ({ focused }) => (
    <TabBarMaterialCommunityIcon focused={focused} name='microphone-variant' />),
};

TourStack.path = '';



const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarOptions: { activeTintColor: 'black' },
  tabBarIcon: ({ focused }) => (
    <TabBarMaterialCommunityIcon focused={focused} name='information-outline' />),
};

AboutStack.path = '';



const tabNavigator = createBottomTabNavigator({
  AlbumStack,
  EPsStack,
  MixtapesStack,
  TourStack,
  AboutStack,
});

tabNavigator.path = '';

export default tabNavigator;
