import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

    return (
    <View style={styles.viewStyle}>
        
    <Text style={styles.textStyle}>{props.headerText}</Text>

    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        paddingTop: 30,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center'
    }
};

export default Header;
