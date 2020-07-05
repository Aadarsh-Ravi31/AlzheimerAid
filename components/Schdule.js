import * as React from 'react';
import { Text,Dimensions, ImageBackground, StyleSheet,TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TimePicker from 'react-native-datepicker'

var lol =0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes()
    this.state = {text:'',date: datetime,};
  }
  onPress = () => {
      console.log(new Date(this.state.date))
      var x = new Date(this.state.date.substring(0,4)+"-"+this.state.date.substring(5,7)+"-"+this.state.date.substring(8,10)+" "+this.state.date.substring(12,14)+":"+this.state.date.substring(16,18)+":"+"00");
      setTimeout(()=>{
        alert(this.state.text)
      },1000*60)
      lol = lol + 1
      this.props.navigation.navigate('Disp',{'events':this.props.navigation.getParam('events').push({"name":this.state.text,"time":this.state.date,"id":lol})})
    //  var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes\
    // var x = new Date(this.state.date.substring(0,4)+"-"+this.state.date.substring(5,7)+"-"+this.state.date.substring(8,10)+" "+this.state.time.substring(0,3)+":"+this.state.time.substring(4,6)+":"+"00");
    // console.log(x);
    
    
  }
  render() {
    return (
        <ImageBackground source={{uri: 'https://i.redd.it/zzz9bc5mtofx.png'}} style = {styles.container}>
        <TextInput style={{color:'white'}} placeholderTextColor='white' placeholder = "Enter your reminder" underlineColorAndroid = " " onChangeText={(text) => this.setState({text})} value={this.state.text} /> 
        <Text></Text>
        <Text></Text>
        <Text></Text>  
             <TimePicker
             
        style={{color:'white',width: 200,}}
        date={this.state.date}
        mode="datetime"
        placeholder="select deadline"
        placeholderTextColor='white'
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
            this.setState({date})}}
      />
      <Text/>
        <TouchableOpacity style = {styles.button} onPress={this.onPress}>             
        <Text>Submit</Text>                                                                        
       </TouchableOpacity>               
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button : {
    

    padding : 20,
    backgroundColor : '#59cbbd'
  }
});