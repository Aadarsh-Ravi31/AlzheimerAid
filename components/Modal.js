import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button , FlatList , TouchableOpacity , Picker } from 'react-native';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      content: true
    }
  }

     updateUser = (user) => {
      this.setState({ user: user })
      alert(user);
   }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }
   
  onPress = (item) => {
    alert(item)
  }

render() {

    return (
      <View style={styles.container}>

       {
        // Display the content in screen when state object "content" is true.
        // Hide the content in screen when state object "content" is false. 
        this.state.content ?  null :<View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = "Wallet" value = "Wallet" />
               <Picker.Item label = "Key" value = "Key" />
               <Picker.Item label = "Bottle" value = "Bottle" />
               <Picker.Item label = "Book" value = "Book" />
               <Picker.Item label = "Specs" value = "Specs" />
            </Picker>
         </View>
        
      }     <View>
      
      <Button title="Hide Text Component" onPress={this.componentHideAndShow} />
            </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});