import React from 'react';
import {View} from 'react-native';

import AlbumList from '../components/AlbumList';

export default function AlbumsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <AlbumList/>
    </View>
  );
}

AlbumsScreen.navigationOptions = {
  title: 'Albums',
  headerTitleStyle: { flex: 1, textAlign: 'center' },
};