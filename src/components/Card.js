import React, { Component } from 'react';
import { View } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            //this.props.children is taking whatever is put inbetween
            //<Card> tags and saying to put it in between the <View> tag here
            <View style={styles.containerStyle}> 
                {this.props.children} 
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2, //Round off corners of border
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, 
        shadowRadius: 2, //Round off corners of shadow
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }
};
