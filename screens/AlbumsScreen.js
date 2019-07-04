import React from 'react';
import {View} from 'react-native';

import AlbumList from '../components/AlbumList';
import Header from '../components/Header';

export default function AlbumsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
  );
}

AlbumsScreen.navigationOptions = {
  header: null,
  title: 'Albums',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};