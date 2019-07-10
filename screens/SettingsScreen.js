import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import Button from '../components/Button';
import Header from '../components/Header';
import AboutScreen from './AboutScreen';
import {renderAlbums} from '../components/AlbumList';

const services = [
    {
        label: 'Spotify',
        value: 'spotify',
    },
    {
        label: 'Soundcloud',
        value: 'soundcloud',
    },
    {
        label: 'Youtube',
        value: 'youtube',
    },
];

class SettingsScreen extends Component {
    render() {
        return <AppContainer />;
    }
}
class MainScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            service: undefined,
        };
    }

    render() {
        const placeholder = {
            label: 'Select a service...',
            value: null,
            color: '#9EA0A4',
        };

        return (
            <React.Fragment>
                <Header headerText={'Settings'} />

                <ScrollView style={styles.container}>

                    <View style={styles.dropdownContainer}>

                        <Text>Select whihch service to use (default is to use all):</Text>
                         <RNPickerSelect
                            placeholder={placeholder}
                            items={services}
                            onValueChange={value => {
                                this.setState({
                                    service: value,     
                                },
                                () => onServiceChange(this.state.service));                                
                            }}
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                            useNativeAndroidPickerStyle={false}
                            Icon={() => {
                                return <Entypo name="folder-music" size={24} color="gray" />;
                            }}
                        />
                        
                    </View>

                    <Button
                        buttonText='About'
                        onPress={() => this.props.navigation.navigate('About')}
                    />
                </ScrollView>
            </React.Fragment>
        );
    }
}

function onServiceChange () {


    if(service == 'spotify') {
        console.log('You have selected spotify');
    }

    if(service == 'soundcloud') {
        console.log('You have selected soundcloud');
    }

    if(service == 'youtube') {
        console.log('You have selected youtube');
    }
    
    if(service == null) {
        console.log('You have not selected any servce, thus every service is active');
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

const styles = {
    container: {
        paddingVertical: 40,
        paddingHorizontal: 10,
        flex: 1,
    },
    dropdownContainer: {
        paddingBottom: 30,
    }
}

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#BBBBBB',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
}

export default SettingsScreen;
