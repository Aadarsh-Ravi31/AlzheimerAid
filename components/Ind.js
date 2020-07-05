import React from "react";
import Client from 'socket.io-client';
import {Text,View,StyleSheet,TextInput,Button,ImageBackground,Image} from 'react-native';
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
            this.state.chats.push(val);
            console.log(val)
            this.forceUpdate()
        })
        
                
    }


    constructor(props)
    {
        super(props);
        this.state = {
            room:"random",
            user:'',
            msg:'',
            chats:[],
        };

        // _BackgroundTimer.setInterval(() => { 
        //     //code that will be called every 3 seconds
        //     console.log("Otha omale") 
        //     }, 
        //     3000);

    }

    render()
    {
        return(
            
            <ImageBackground source={{uri: 'https://i.redd.it/zzz9bc5mtofx.png'}} style = {style.container}>
                <Image
          style={{width: 200,top:-40, height: 200}}
          source={{uri: 'https://www.logolynx.com/images/logolynx/27/271d1158fe7fee230de1e5273432b90f.png'}}
        />
                <Text style={{color:"white"}}>ALZHEIMER-AID</Text>
        
        <Button title="Enter Room" onPress={()=>{
            if(this.state.user!='')
            this.props.navigation.navigate('forum',{user:this.state.user});
            else
            alert("Cant be empty")
        }}/>
        </ImageBackground>
        
        );
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ecf0f1',
            alignItems: 'center',
            justifyContent: 'center',
          },
    }
);