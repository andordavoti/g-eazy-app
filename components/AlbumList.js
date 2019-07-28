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
        service: 'Spotify',
        image: require('../assets/images/the-beautiful-and-damned.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'When It\'s Dark out',
        artist: 'G-Eazy',
        release_date: '2015',
        url: 'spotify:album:09Q3WwGYsQe5ognkvVkmCu',
        service: 'Spotify',
        image: require('../assets/images/when-its-dark-out.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'These Things Happen',
        artist: 'G-Eazy',
        release_date: '2014',
        url: 'spotify:album:6wDc63NhKy2PyXdbhkRmrl',
        service: 'Spotify',
        image: require('../assets/images/these-things-happen.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Must Be Nice',
        artist: 'G-Eazy',
        release_date: '2012',
        url: 'spotify:album:1wRnE3zgCE5oY28pzmlsqe',
        service: 'Spotify',
        image: require('../assets/images/must-be-nice.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'The Epidemic',
        artist: 'G-Eazy',
        release_date: '2009',
        url: 'https://www.youtube.com/playlist?list=PL9b4kuq2Yu28yCauqkPgzh5QcBkx_j-Tq',
        service: 'YouTube',
        image: require('../assets/images/the-epidemic.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'The Fresh',
        artist: 'G-Eazy',
        release_date: '2008',
        url: 'https://www.youtube.com/playlist?list=PLks3NpQP6i_YBSALMZuzulqJY4krjSNes',
        service: 'YouTube',
        image: require('../assets/images/the-fresh.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      }
    ]
  };



renderAlbums() {
    return this.state.record.map(record =>
      <CollectionDetail key={record.title} record={record} />
    );
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
