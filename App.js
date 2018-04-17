// Import libraries to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header'; //importing another component
import AlbumList from './src/components/AlbumList';
//Create a component
export default class App extends Component {
  render() {  
    return (
      <View style={{ flex: 1 }}>
  <Header headerText={'Albums'} />
  <AlbumList />
     </View> 
    );
  }
}

