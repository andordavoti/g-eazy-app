import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CollectionDetail = ({ record }) => {
    const { title, artist, thumbnail_image, image, url, release_date } = record;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('spotify:artist:02kJSzxNuaWGqwubyUba0Z')}>
                        <Image

                            source={thumbnail_image}
                            style={thumbnailStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> {title} - {release_date}</Text>
                    <TouchableOpacity>
                        <Text onPress={() => Linking.openURL('spotify:artist:02kJSzxNuaWGqwubyUba0Z')}>{artist}</Text>
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
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyConten: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 400,
        flexGrow: 1,
        width: null
    }
};

export default CollectionDetail;
