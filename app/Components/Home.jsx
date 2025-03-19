import { useState } from 'react';
import {  Text,View,Button,Alert, TextInput,StyleSheet } from 'react-native';
import { homeCss } from '../../styles/Home.css';
import AboutUs from "../../"
const Home=()=>{
    const HomeBtn=()=>{
        Alert.Alert("Home Page")
     }
    return(
        <View style={homeCss.navbar}>
            <Text style={homeCss.NavButton} onClick={HomeBtn}>Home</Text>
            <Text style={homeCss.NavButton} onClick={HomeBtn}>About</Text>
            <Text style={homeCss.NavButton}>Contact</Text>
            <Text style={homeCss.NavButton}>login</Text>
        </View>
    )
}
export default Home