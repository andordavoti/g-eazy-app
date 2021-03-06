import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RecordDetail from './RecordDetail';

class EPsList extends Component {
  state = {
    record: [
      {
        title: 'Scary Nights',
        artist: 'G-Eazy',
        release_date: '2019',
        url: 'spotify:album:77Q0xwlCfFLhUNO1Sh8ORM',
        service: 'Spotify',
        image: require('../assets/images/scary-nights.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'B-Sides',
        artist: 'G-Eazy',
        release_date: '2019',
        url: 'spotify:album:2C6M7W3XuPMko8hacm8Ibo',
        service: 'Spotify',
        image: require('../assets/images/b-sides.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'The Vault',
        artist: 'G-Eazy',
        release_date: '2018',
        url: 'spotify:album:2SWrHEcHbsRIFhnuA7addE',
        service: 'Spotify',
        image: require('../assets/images/the-vault.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Nothing Wrong',
        artist: 'G-Eazy',
        release_date: '2017',
        url: 'https://soundcloud.com/g_eazy/sets/nothing-wrong-ep-1',
        service: 'Soundcloud',
        image: require('../assets/images/nothing-wrong.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Step Brothers',
        artist: 'G-Eazy',
        release_date: '2017',
        url: 'https://soundcloud.com/g_eazy/sets/step-brothers-1',
        service: 'Soundcloud',
        image: require('../assets/images/step-brothers.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'These Things Also Happened',
        artist: 'G-Eazy',
        release_date: '2014',
        url: 'https://soundcloud.com/g_eazy/sets/these-things-also-happened',
        service: 'Soundcloud',
        image: require('../assets/images/these-things-also-happened.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      },
      {
        title: 'Must Be Twice',
        artist: 'G-Eazy',
        release_date: '2013',
        url: 'https://soundcloud.com/g_eazy/sets/must-be-twice',
        service: 'Soundcloud',
        image: require('../assets/images/must-be-twice.jpg'),
        artist_image: require('../assets/images/g-eazy.jpg')
      }
    ]
  };

  renderEps() {
    return this.state.record.map(record =>
      <RecordDetail key={record.title} record={record} />);
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
