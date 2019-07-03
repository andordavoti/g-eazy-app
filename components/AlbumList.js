import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CollectionDetail from './CollectionDetail';

class AlbumList extends Component {
  state = {
    record: [
      {
        title: 'The Beautiful & Damned',
        artist: 'G-Eazy',
        release_date: '2017',
        url: 'spotify:album:1VAc77UvK5wj8ZSWCo3V2b',
        image: require('../assets/images/the-beautiful-and-damned.jpg'),
        thumbnail_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'When It\'s Dark out',
        artist: 'G-Eazy',
        release_date: '2015',
        url: 'spotify:album:09Q3WwGYsQe5ognkvVkmCu',
        image: require('../assets/images/when-its-dark-out.jpg'),
        thumbnail_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'These Things Happen',
        artist: 'G-Eazy',
        release_date: '2014',
        url: 'spotify:album:6wDc63NhKy2PyXdbhkRmrl',
        image: require('../assets/images/these-things-happen.jpg'),
        thumbnail_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Must Be Nice',
        artist: 'G-Eazy',
        release_date: '2012',
        url: 'spotify:album:1wRnE3zgCE5oY28pzmlsqe',
        image: require('../assets/images/must-be-nice.jpg'),
        thumbnail_image: require('../assets/images/g-eazy.jpg')
      }
    ]
  };

  renderAlbums() {
    return this.state.record.map(record =>
      <CollectionDetail key={record.title} record={record} />);
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
