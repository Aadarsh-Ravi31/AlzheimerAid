import React from "react";
import Client from 'socket.io-client';
import {Text,View,StyleSheet,Image,ImageBackground,TextInput,TouchableHighlight,Picker,Button,FlatList,SafeAreaView, TouchableOpacity} from 'react-native';
import { YellowBox } from 'react-native';
//import Model from './Modal'

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
export default class Sock extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state = {
            user:'1',
            msg:'',
            chats:[],
            c:0,
            q:"Bottle",
            query:[]
        };
        this.state.query["Wallet"] = "Near Television and sofa:lastseen:2020-02-14 23:10";
        this.state.query["Specs"] = "Near Bed:lastseen:2020-02-15 00:10"
        this.state.query["Bottle"] = "Near Table and Ac:lastseen:2020-02-14 08:45"
        this.state.query["Book"] = "Near Table:lastseen:1999-02-14 10:09"
        this.state.query["Key"] = "Near Bed:lastseen:2020-02-15 10:34"


    }
    counter()
    {
        this.state.c = this.state.c+1;
        return(this.state.c)
    }
    render()
    {
        return(
            <ImageBackground source={{uri: 'https://i.redd.it/zzz9bc5mtofx.png'}} style = {style.container}>
                <Text style={{backgroundColor:'orange',fontSize:30,alignContent:"center"}}>ALZHEIMER-AID</Text>
                <Picker style={{color:'white',backgroundColor:'#001133'}} selectedValue = {this.state.q} onValueChange = {(q)=>{
                    
                    this.state.chats.push({"msg":q,"user":"1"})
                    this.state.chats.push({"msg":this.state.query[q],"user":"2"})
                    this.setState({q})
                    }}>
                <Picker.Item label = "Wallet" value = "Wallet" />
               <Picker.Item label = "Key" value = "Key" />
               <Picker.Item label = "Bottle" value = "Bottle" />
               <Picker.Item label = "Book" value = "Book" />
               <Picker.Item label = "Specs" value = "Specs" />
            </Picker>
            
                <SafeAreaView style={style.chats}>
                <Image style={{height: '100%', width: '100%', position:'absolute'}} source={{uri: 'https://i.redd.it/zzz9bc5mtofx.png'}} />
                <FlatList
        data={this.state.chats}
  renderItem={({item, index, separators}) => (
    <TouchableHighlight
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View key={this.counter()} style={{borderTopColor:'lightgrey',borderTopWidth:5,width:400,alignContent:(this.state.user!=item.user)?"flex-end":"flex-start"}}>
  <Text style={{fontSize:20,color: (this.state.user!=item.user)?'orange':'lightblue'}}>{(item.user!=this.state.user)?'':''}{item.msg}</Text>
  <Text/>
      </View>
    </TouchableHighlight>
  )}
/>
    </SafeAreaView>

    <TextInput placeholderTextColor="white" value={this.state.msg} style={{color:'white',bottom:-25}} placeholder="What to find?"  onChangeText={(msg)=>{this.setState({msg})}}/>
                <TouchableOpacity style={{top:-9,marginLeft:340,alignItems:"flex-end",height:30,width:60,}} onPress={()=>{
                    if(this.state.msg!='')
                    {
                    this.state.chats.push({"msg":this.state.msg,"user":"1"})
                    this.state.chats.push({"msg":this.state.query[this.state.msg],"user":"2"})
                    this.setState({msg:''})
                    }
                }}><Text style={style.send}>send</Text></TouchableOpacity>
                
                {/*this.state.chats.map((val,key)=>{
                    return(<Text key={key}> {val.id} {val.user}:{val.msg} </Text>)
                })*/}
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            //alignItems: 'center',
            //justifyContent: 'center',
          },
          chats:{
            flex: 1,
            width:400,
            backgroundColor: '#fff',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          },
          chatsother:{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          send:{
              backgroundColor:"#b4dde3",
              height:30,
              width : 60,
              fontSize:20,
              borderRadius:10,
              justifyContent:"center",
              alignItems:"center",
              alignContent:"center"
          }

    }
);