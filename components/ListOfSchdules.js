import * as React from 'react';
import { Text, View,ImageBackground, StyleSheet,FlatList,Dimensions,TextInput,TouchableOpacity,TouchableHighlight,SafeAreaView} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TimePicker from 'react-native-datepicker'
import { withOrientation } from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {c:0,events:this.props.navigation.getParam('event')||[]};
  }
  onPress = () => {

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes\
    var x = new Date(this.state.date.substring(0,4)+"-"+this.state.date.substring(5,7)+"-"+this.state.date.substring(8,10)+" "+this.state.time.substring(0,3)+":"+this.state.time.substring(4,6)+":"+"00");
    console.log(x);
  }
  counter()
  {
      this.state.c = this.state.c + 1;
      return(this.state.c);
  }
  render() {
      console.log(this.state.events[0])
    return (
        <ImageBackground source={{uri: 'https://i.redd.it/zzz9bc5mtofx.png'}} style = {styles.container}>
            <Text style={{backgroundColor:'orange',top:-340,left:-10,width:Dimensions.get('screen').width,fontSize:30,alignContent:"center"}}>SCHEDULER</Text>
          <TouchableOpacity style={styles.send} onPress={()=>{
              this.props.navigation.navigate('Add',{'events':this.state.events})
          }}><Text style={{color:'white'}}>ADD NEW</Text></TouchableOpacity>
    {(this.state.events.length==0)?<Text style={{color:'white',fontSize:15}}>NOTHING TO DO HAVE A NICE DAY</Text>:
       <SafeAreaView >
                <FlatList
        data={this.state.events}
        renderItem={({item, index, separators}) => (
    <TouchableHighlight
      onPress={() => {
         
      }}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View key={this.counter()} style={{borderTopColor:'white',borderTopWidth:2,width:400,alignContent:(this.state.user!=item.user)?"flex-end":"flex-start"}}>
        <Text style={{alignContent:"flex-end",color:'white'}}>x</Text>
        <Text style={{fontSize:20,color:'white'}}>{item.name}</Text>
        <Text style={{fontSize:20,color:'white'}}>{item.time}</Text>
      </View>
    </TouchableHighlight>
  )}
/>
    </SafeAreaView>
    }
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
    color:'white'
  },
  send:{
    backgroundColor:'#59cbbd',
    height:30,
    width : 75,
    fontSize:20,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
}
});