import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CollectionDetail = ({ record }) => {
    const { title, artist, artist_image, image, url, release_date } = record;
    const {
        artistImageStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        recordTitleStyle,
        imageStyle,
        artistNameStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('spotify:artist:02kJSzxNuaWGqwubyUba0Z')}>
                        <Image
                            source={artist_image}
                            style={artistImageStyle}
                        />
                    </TouchableOpacity>
                </View>

                <View style={headerContentStyle}>
                    <Text style={recordTitleStyle}> {title} - ({release_date})</Text>
                    <TouchableOpacity>
                        <Text
                        style={artistNameStyle}
                        onPress={() => Linking.openURL('spotify:artist:02kJSzxNuaWGqwubyUba0Z')}>{artist}</Text>
                    </TouchableOpacity>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={image}
                    style={imageStyle}
                    onPress={() => Linking.openURL('spotify:artist:02kJSzxNuaWGqwubyUba0Z')}
                />
            </CardSection>

            <CardSection>
                <Button
                    buttonText='Listen Now'
                    onPress={() => Linking.openURL(url)}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    recordTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    artistNameStyle: {
        fontSize: 15,
        marginLeft: 5
    },
    artistImageStyle: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    thumbnailContainerStyle: {
        justifyConten: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1
    },
    imageStyle: {
        height: 400,
        flexGrow: 1,
        width: null,
        borderRadius: 5
    }
};

export default CollectionDetail;
