import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CollectionDetail from './CollectionDetail';

class EPsList extends Component {
  state = {
    record: [
      {
        title: 'B-Sides',
        artist: 'G-Eazy',
        release_date: '2019',
        url: 'spotify:album:405miG4F2WOdyNmP4ChaJk',
        service: 'spotify',
        image: require('../assets/images/b-sides.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'The Vault',
        artist: 'G-Eazy',
        release_date: '2018',
        url: 'spotify:album:2SWrHEcHbsRIFhnuA7addE',
        service: 'spotify',
        image: require('../assets/images/the-vault.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Nothing Wrong',
        artist: 'G-Eazy',
        release_date: '2017',
        url: 'https://soundcloud.com/g_eazy/sets/nothing-wrong-ep-1',
        service: 'soundcloud',
        image: require('../assets/images/nothing-wrong.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Step Brothers',
        artist: 'G-Eazy',
        release_date: '2017',
        url: 'https://soundcloud.com/g_eazy/sets/step-brothers-1',
        service: 'soundcloud',
        image: require('../assets/images/step-brothers.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'These Things Also Happened',
        artist: 'G-Eazy',
        release_date: '2014',
        url: 'https://soundcloud.com/g_eazy/sets/these-things-also-happened',
        service: 'soundcloud',
        image: require('../assets/images/these-things-also-happened.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Must Be Twice',
        artist: 'G-Eazy',
        release_date: '2013',
        url: 'https://soundcloud.com/g_eazy/sets/must-be-twice',
        service: 'soundcloud',
        image: require('../assets/images/must-be-twice.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'The Epidemic',
        artist: 'G-Eazy',
        release_date: '2009',
        url: 'https://www.youtube.com/playlist?list=PL9b4kuq2Yu28yCauqkPgzh5QcBkx_j-Tq',
        service: 'youtube',
        image: require('../assets/images/the-epidemic.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'The Fresh',
        artist: 'G-Eazy',
        release_date: '2008',
        url: 'https://www.youtube.com/playlist?list=PLks3NpQP6i_YBSALMZuzulqJY4krjSNes',
        service: 'youtube',
        image: require('../assets/images/the-fresh.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      }
    ]
  };

  renderEps() {
    return this.state.record.map(record =>
      <CollectionDetail key={record.title} record={record} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderEps()}
      </ScrollView>
    );
  }
}

export default EPsList;
