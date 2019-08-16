import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import TourDetail from './TourDetail';
import axios from 'axios';

class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      tourInfo: [],
    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData()
    .then(() => {
      this.setState({ refreshing: false });
    });
  }

  componentWillMount() {
    this.fetchData();
  }

   async fetchData() {
    axios.get('https://rest.bandsintown.com/artists/G-Eazy/events?app_id=43637f70f84aa4574a5ce121e62b4e55&date=upcoming')
      .then(response => this.setState({ tourInfo: response.data }));
  }

  renderTour() {
    return this.state.tourInfo.map(tourInfo =>
      <TourDetail key={tourInfo.id} tourInfo={tourInfo} />
    );
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
      {this.renderTour()}
      </ScrollView>

    );
  }
}

export default TourList;
