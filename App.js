/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {  StyleSheet,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Db from './components/HomeScreen';
import BackgroundTimer from "react-native-background-timer"
import SendSMS from 'react-native-sms-x';
import GeoLocation from 'react-native-get-location'


export default class App extends React.Component
{ 
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
    }, 12000000);

  }

render(){
  return (
    <>
    <Db/>
          </>
  );
};
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
