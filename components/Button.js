import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
    const { buttonStyle, textStyle } = Styles;

    return (
        <TouchableOpacity 
            onPress={onPress} style={buttonStyle}>
            <Text 
            style={textStyle}>{buttonText}
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
        backgroundColor: '#EEEEEE',
        borderWidth: 2,
        borderColor: '#000000',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
