import React, { Component } from "react";
import {
  ScrollView,
  RefreshControl,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import TourDetail from "./TourDetail";
import axios from "axios";
import { openLink } from "../lib/openLink";

class TourList extends Component {
  state = {
    refreshing: false,
    tourInfo: [],
    tourInfoError: [],
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    axios
      .get(
        "https://rest.bandsintown.com/artists/G-Eazy/events?app_id=43637f70f84aa4574a5ce121e62b4e55&date=upcoming"
      )
      .then((response) => this.setState({ tourInfo: response.data }))
      .catch((error) => this.setState({ tourInfoError: error.response }));
  }

  renderTour() {
    if (this.state.tourInfo.length !== 0) {
      return this.state.tourInfo.map((tourInfo) => (
        <TourDetail key={tourInfo.id} tourInfo={tourInfo} />
      ));
    } else if (this.state.tourInfoError.status === 403) {
      return (
        <View>
          <Text style={Styles.boldTextStyle}>
            This feature is currently not supported.
          </Text>
          <Text style={Styles.textStyle}>Tour dates are available here:</Text>
          <TouchableOpacity
            onPress={() => openLink("https://g-eazy.com/pages/tour")}
          >
            <Text style={Styles.linkStyle}>https://g-eazy.com/pages/tour</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Text style={Styles.boldTextStyle}>
          No tour dates available at this time
        </Text>
      );
    }
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

const Styles = {
  boldTextStyle: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 50,
  },
  textStyle: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    paddingTop: 35,
  },
  linkStyle: {
    color: "blue",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 35,
    paddingBottom: 10,
  },
};

export default TourList;
