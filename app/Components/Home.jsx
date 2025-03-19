import { useState } from 'react';
import {  Text,View,Button,Alert, TextInput,StyleSheet } from 'react-native';
import { homeecss } from '../../styles/Home.css';
const Home=()=>{
    return(
        <View style={homeecss.navbar}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Contact</Text>
            <Text>login</Text>
        </View>
    )
}
export default Home;