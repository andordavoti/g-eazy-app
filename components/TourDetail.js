import React from "react";
import { Text, View, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const TourDetail = ({ tourInfo }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.recordTitleStyle}>
            {" "}
            {tourInfo.venue.name} - {tourInfo.datetime}
          </Text>
          <Text style={styles.artistNameStyle}>
            {tourInfo.venue.city}, {tourInfo.venue.country}
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          buttonText={"Tickets"}
          onPress={() => Linking.openURL(tourInfo.offers[0].url)}
        />
        <Button
          buttonText={"More info"}
          onPress={() => Linking.openURL(tourInfo.url)}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  recordTitleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  artistNameStyle: {
    fontSize: 15,
    marginLeft: 5,
  },
  artistImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  thumbnailContainerStyle: {
    justifyConten: "center",
    alignItems: "center",
    marginLeft: 1,
    marginRight: 1,
  },
  imageStyle: {
    height: 400,
    flexGrow: 1,
    width: null,
    borderRadius: 5,
  },
};

export default TourDetail;
