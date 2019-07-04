import React, { Component } from 'react';
import { View, TouchableOpacity, Linking, Image, Text, ScrollView } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Button from '../components/Button';
import Header from '../components/Header';

class SettingsScreen extends Component {
    render() {
        return <AppContainer />;
    }
}

export default SettingsScreen;

class MainScreen extends Component {
    render() {
        return (

            <View>

                <Header headerText={'Settings'} />

                <ScrollView>
                    <View style={Styles.ContainerStyle}>

                        <Button
                            buttonText="About"
                            onPress={() => this.props.navigation.navigate('About')}
                        />

                    </View>
                </ScrollView>

            </View>
        );
    }
}

class AboutScreen extends Component {
    render() {
        return (
            <View>

                <Header headerText={'About'} />

                <ScrollView>
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

                        <Text style={Styles.VersionStyle}>Version: 1.0</Text>

                        <Button
                            buttonText="Back"
                            onPress={() => this.props.navigation.navigate('Main')}
                        />

                    </View>
                </ScrollView>

            </View>
        );
    }
}


SettingsScreen.navigationOptions = {
    header: null,
    title: 'Settings',
    headerTitleStyle: { flex: 1, textAlign: 'center' },
};

const AppSwitchNavigator = createSwitchNavigator({
    Main: { screen: MainScreen },
    About: { screen: AboutScreen }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

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
        padding: 30,
        textAlign: 'center',
        fontSize: 15
    },
    VersionStyle: {
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: 15
    },
}