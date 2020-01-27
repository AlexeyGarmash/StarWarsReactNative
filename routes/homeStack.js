import React from 'react'
import { createAppContainer } from 'react-navigation'
import {Image} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ListData from '../screens/listData'


const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    ListData: {
        screen: ListData
    }
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#f4511e',
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15
        },
        headerTintColor: '#fff',
        headerTitleAlign: "center",
        headerBackImage: () => {
            return(
                <Image 
                style={{height: 20, width: 20}}
                source={require('../assets/leftArrow.png')}/>
            )
        }
    }
}
)


export default createAppContainer(AppNavigator)