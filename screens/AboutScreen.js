import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';

class AboutScreen extends Component {

    render() {
        return (
            <React.Fragment>

                <View style={Styles.ContainerStyle}>

                    <Text style={Styles.HeaderStyle}>Artist:</Text>

                    <Image
                        source={require('../assets/images/g-eazy-about.png')}
                        style={Styles.imageStyle}
                    />

                    <Text style={Styles.NameStyle}>G-Eazy</Text>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://g-eazy.com')}>
                        <Text style={Styles.LinkStyle}>www.g-eazy.com</Text>
                    </TouchableOpacity>
                    <Text style={Styles.HeaderStyle}>Developer:</Text>

                    <Image
                        source={require('../assets/images/andor-davoti.png')}
                        style={Styles.imageStyle}
                    />

                    <Text style={Styles.NameStyle}>Andor Davoti</Text>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://andordavoti.com')}>
                        <Text
                            style={Styles.LinkStyle}>
                            www.andordavoti.com</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://paypal.me/andordavoti')}>
                        <Text
                            style={Styles.DonateStyle}>
                            Donate Via PayPal</Text>
                    </TouchableOpacity>

                    <Text style={Styles.VersionStyle}>Version: 1.1.1</Text>
                </View>
            </React.Fragment>
        );
    }
}


const Styles = {
    ContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150
    },
    HeaderStyle: {
        width: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    NameStyle: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 15
    },
    LinkStyle: {
        color: 'blue',
        padding: 15,
        textAlign: 'center',
        fontSize: 15
    },
    DonateStyle: {
        color: 'blue',
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 20
    },
    VersionStyle: {
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: 15
    },
}

AboutScreen.navigationOptions = {
    title: 'About',
    headerTitleStyle: { flex: 1, textAlign: 'center' },
};

export default AboutScreen;
