import React from 'react';
import {Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChatApp from './chat'
import Initial from './initial' 
import Schedule from './Schdule'
import ListOfSchdules from './ListOfSchdules';
import ChatHelp from './ChatHelp'
const defOptions = {
    headerStyle: {
        backgroundColor: '#8b008b',
    },
    headerTitleStyle: {
        fontSize: 20
    },
    headerTintColor: 'white'
    
};

const ShopNavigator = createStackNavigator({
    init: Initial,
    forum: ChatApp,
    
    
},{
    defaultNavigationOptions: {
        initialRouteName: 'init', 
        headerShown: false
    }
});

const Events = createStackNavigator({
    Disp: ListOfSchdules,
    Add: Schedule,
    
    
},{
    defaultNavigationOptions: {
        initialRouteName: 'init', 
        headerShown: false
    }
});

const tabScreenConfig = {
    Find:{
        screen: ChatHelp,
        navigationOptions: {
            
            tabBarIcon: (tabInfo) => {
                return <Text color={tabInfo.tintColor} >Search</Text>;
            },
                tabBarColor: '#ffa500'
            }

    }
    ,Forum: { 
        screen: ShopNavigator,
        navigationOptions: {
            
            tabBarIcon: (tabInfo) => {
                return <Text color={tabInfo.tintColor} >Chat</Text>;
            },
                tabBarColor: '#ffa500'
            }
    
            },
    Notification: {
        screen: Events ,
        navigationOptions: {
            
            tabBarIcon: (tabInfo) => {
                return <Text color={tabInfo.tintColor} >Schedule</Text>;
            },
                tabBarColor: '#ffa500'
            }
    },
        
    
};


const TabNavigator = createBottomTabNavigator(tabScreenConfig, {
    activeTintColor: '#ff6f00',
    shifting: true,
    tabBarOptions: {
        
        activeBackgroundColor: '#8b008b',
        inactiveBackgroundColor: '#8b008b',
        activeTintColor: 'white'
    }
},{
    defaultNavigationOptions: defOptions
});
export default createAppContainer(TabNavigator);
