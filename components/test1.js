import React, {Component} from 'react';
import {Platform, Button,StyleSheet, Text, View, TextInput, TouchableOpacity, Switch} from 'react-native';

import  firebase from 'firebase';
import BackgroundTimer from "react-native-background-timer"
import SendSMS from 'react-native-sms-x';
import GeoLocation from 'react-native-get-location'
// you can put any number as Id to identify which message being process

export default class App extends Component {
  
    constructor(props){
      super(props);
      this.state = ({
        chats:{"loading":"..."},
        all:true,
        order:[],
        catShow : [],
        curCat : "",
        ready: false,
          where: {lat:null, lng:null},
          error: null
      });
       
    }
    
    

  
    componentDidMount()
    {
        this.state = {}
        this.hello();
        GeoLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
      })
      .then(location => {
          console.log(location);
          this.setState({where:location,ready:true})
      })
      .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
      })
    }
    hello()
    { 
      BackgroundTimer.setInterval(() => {
        // this will be executed once after 10 seconds
        // even when app is the the background
          
          if(this.state.ready)
         {
          console.log('tac'); 
          SendSMS.send(123, "+919445218635", 'http://maps.google.com/maps?q=' +this.state.where.latitude+','+this.state.where.longitude, (msg)=>{ console.log(msg) })
         }//this.hello();
      }, 3000);

    }
  
    
    render() {
      //console.log((Object.entries(this.state.dishes)));
          
      return (
        <>
        {Object.entries(this.state.chats).map((val)=>{  
        return(
            <>
        <Text>{val[0]}:{val[1]}</Text>
        </>);
    })
      }
      </>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4F7176',
    },
  });
  /*
  
https://gist.github.com/prof3ssorSt3v3/86ead6c99f8f0e5b768adca9260cfe68

https://stackoverflow.com/questions/5807063/url-to-a-google-maps-page-to-show-a-pin-given-a-latitude-longitude

https://developers.google.com/maps/solutions/transport-tracker/start

https://reactnativecode.com/if-else-conditional-statement-tutorial/



https://aboutreact.com/react-native-get-current-date-time/

https://www.youtube.com/watch?v=KytduDMW_7o

https://reactnativecode.com/react-native-send-sms-on-button-click/

https://stackoverflow.com/questions/5807063/url-to-a-google-maps-page-to-show-a-pin-given-a-latitude-longitude

https://www.youtube.com/watch?v=KytduDMW_7o

https://www.youtube.com/watch?v=wh7_etX91ls

https://github.com/EdjeElectronics/TensorFlow-Object-Detection-API-Tutorial-Train-Multiple-Objects-Windows-10/blob/master/Object_detection_webcam.py







https://www.youtube.com/watch?time_continue=15&v=PyjBd7IDYZs&feature=emb_logo
  */ 