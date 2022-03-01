import React from 'react'
import { View, Text ,Platform,StatusBar,SafeAreaView} from 'react-native'
import Feature from '../src/Icons/Feature'
import Logo from '../src/Icons/Logo'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header() {

    return (
        
       

        <View
        style={{backgroundColor:'white'}}
        >   
           
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:'6%'}} >
            <Icon name="user-circle" size={24} color="#4C9EEB" />
            <Logo />
            <Feature />
            </View>

            
            
        </View>


    

    
    )


}

