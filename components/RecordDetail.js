import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import * as Linking from "expo-linking";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const RecordDetail = ({ record }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("spotify:artist:02kJSzxNuaWGqwubyUba0Z")
            }
          >
            <Image
              source={record.artist_image}
              style={styles.artistImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerContentStyle}>
          <Text style={styles.recordTitleStyle}>
            {" "}
            {record.title} - ({record.release_date})
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.artistNameStyle}
              onPress={() =>
                Linking.openURL("spotify:artist:02kJSzxNuaWGqwubyUba0Z")
              }
            >
              {record.artist}
            </Text>
          </TouchableOpacity>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={record.image}
          style={styles.imageStyle}
          onPress={() =>
            Linking.openURL("spotify:artist:02kJSzxNuaWGqwubyUba0Z")
          }
        />
      </CardSection>

      <CardSection>
        <Button
          buttonText={"Listen on " + record.service}
          onPress={() => Linking.openURL(record.url)}
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
    height: Dimensions.get("window").width,
    flexGrow: 1,
    width: null,
    borderRadius: 5,
  },
};

export default RecordDetail;
