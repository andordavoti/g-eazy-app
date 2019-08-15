import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TourDetail from './TourDetail';
import axios from 'axios';

class TourList extends Component {
  state = { tourInfo: [] };

  componentWillMount() {
    axios.get('https://rest.bandsintown.com/artists/G-Eazy/events?app_id=43637f70f84aa4574a5ce121e62b4e55&date=upcoming')
      .then(response => this.setState({ tourInfo: response.data }));
  }

  renderTour() {
    return this.state.tourInfo.map(tourInfo =>
      <TourDetail key={tourInfo.id} tourInfo={tourInfo} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderTour()}
      </ScrollView>
    );
  }
}

export default TourList;
