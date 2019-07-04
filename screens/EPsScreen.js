import React from 'react';
import { View } from 'react-native';
import EPsList from '../components/EPsList';
import Header from '../components/Header';

export default function LinksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'EPs'} />
      <EPsList />
    </View>
  );
}

LinksScreen.navigationOptions = {
  header: null,
  title: 'EPs',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};
