import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
    return (
        <TouchableOpacity 
            onPress={onPress} style={Styles.buttonStyle}>
            <Text 
            style={Styles.textStyle}>{buttonText}
            </Text>
        </TouchableOpacity>
    );
};

const Styles = {
    textStyle: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#000000',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10
    }
};

export default Button;
