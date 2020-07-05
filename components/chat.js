import React from "react";
import Client from 'socket.io-client';
import {Text,View,StyleSheet,TextInput,TouchableHighlight,Button,Image,FlatList,SafeAreaView, TouchableOpacity,ImageBackground} from 'react-native';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
export default class Sock extends React.Component
{

    componentDidMount()
    {
         this.sock = Client('http://172.16.40.240:3000');
        this.sock.addEventListener("recieverandom",(val)=>{
            this.state.chats.push({"msg":val.msg,"user":val.user});
            console.log(val)
            this.forceUpdate()
        })
                       
    }


    constructor(props)
    {
        super(props);
        this.state = {
            room:"random",
            user:this.props.navigation.getParam('user'),
            msg:'',
            chats:[],
            c:0
        };

        // _BackgroundTimer.setInterval(() => { 
        //     //code that will be called every 3 seconds
        //     console.log("Otha omale") 
        //     }, 
        //     3000);

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
                <Text style={{backgroundColor:'orange',fontSize:30,alignContent:"center"}}>CHAT FORUM</Text>
                <SafeAreaView style={style.chats}>
                <Image style={{height: '100%', width: '100%', position:'absolute'}} source={{uri: 'https://i.redd.it/zzz9bc5mtofx.png'}} />
                <FlatList
        data={this.state.chats}
  renderItem={({item, index, separators}) => (
    <TouchableHighlight
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View key={this.counter()} style={{borderTopColor:'white',borderTopWidth:5,width:400,alignContent:(this.state.user!=item.user)?"flex-end":"flex-start"}}>
  <Text  style={{fontSize:20,color: (this.state.user!=item.user)?'orange':'lightblue'}}>{(item.user!=this.state.user)?item.user+':':''}{item.msg}</Text>
  <Text/>
      </View>
    </TouchableHighlight>
  )}
/>
    </SafeAreaView>
    <TextInput placeholderTextColor="white" value={this.state.msg} style={{color:'white',bottom:-25}} placeholder="Enter a message..."  onChangeText={(msg)=>{this.setState({msg})}}/>
                <TouchableOpacity style={{top:-9,marginLeft:340,alignItems:"flex-end",height:30,width:60,}} onPress={()=>{
                    if(this.state.msg!='')
                    {
                    console.log("sending.." + {user:this.state.user,msg:this.state.msg});
                    this.sock.emit("msg",{user:this.state.user,msg:this.state.msg},this.state.room);
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