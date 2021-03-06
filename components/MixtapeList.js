import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RecordDetail from './RecordDetail';

class MixtapeList extends Component {
    state = {
        record: [
            {
                title: 'The Endless Summer',
                artist: 'G-Eazy',
                release_date: '2011',
                url: 'https://soundcloud.com/g_eazy/sets/the-endless-summer-1',
                service: 'Soundcloud',
                image: require('../assets/images/the-endless-summer.jpg'),
                artist_image: require('../assets/images/g-eazy.jpg')
            },
            {
                title: 'The Outsider',
                artist: 'G-Eazy',
                release_date: '2011',
                url: 'https://soundcloud.com/g_eazy/sets/the-outsider-1',
                service: 'Soundcloud',
                image: require('../assets/images/the-outsider.jpg'),
                artist_image: require('../assets/images/g-eazy.jpg')
            },
            {
                title: 'Big',
                artist: 'G-Eazy',
                release_date: '2010',
                url: 'https://www.youtube.com/playlist?list=PLQnylJmIhogjk5UFoYDsVwKt7PFP8JvlV',
                service: 'YouTube',
                image: require('../assets/images/big.jpg'),
                artist_image: require('../assets/images/g-eazy.jpg')
            },
            {
                title: 'Quarantine',
                artist: 'G-Eazy',
                release_date: '2009',
                url: 'https://www.youtube.com/playlist?list=PL9b4kuq2Yu29xWYOeB4rxWQi9hB_H2Oei',
                service: 'YouTube',
                image: require('../assets/images/quarantine.jpg'),
                artist_image: require('../assets/images/g-eazy.jpg')
            },
            {
                title: 'The Sikkis On The Planet',
                artist: 'G-Eazy',
                release_date: '2009',
                url: 'https://www.youtube.com/playlist?list=PLOBuYCNE1IuEDcILI9HCzhfpeeugQh9lQ',
                service: 'YouTube',
                image: require('../assets/images/the-sikkis-on-the-planet.jpg'),
                artist_image: require('../assets/images/g-eazy.jpg')
            },
            {
                title: 'The Tipping Point',
                artist: 'G-Eazy',
                release_date: '2008',
                url: 'https://www.youtube.com/playlist?list=PLOBuYCNE1IuElq-cxZUiFCdqR4iC5aeXt',
                service: 'YouTube',
                image: require('../assets/images/the-tipping-point.jpg'),
                artist_image: require('../assets/images/g-eazy.jpg')
            }
        ]
    };

    renderMixtapes() {
        return this.state.record.map(record =>
            <RecordDetail key={record.title} record={record} />);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderMixtapes()}
            </ScrollView>
        );
    }
}

export default MixtapeList;
