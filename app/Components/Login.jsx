import { useState } from "react"
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
export default Login=()=>{
    const [inputdata,setInputData]=useState({UserName:"",Password:""})
    const HandleLogIn=async()=>{
        if(inputdata.UserName.trim()==="" && inputdata.Password.trim()==""){
            Alert.alert("Enter UserName")
        }else{
            Alert.alert("Login Successfull")
            try {
                await AsyncStorage.setItem("Credentials", JSON.stringify(inputdata));
              } catch (error) {
                console.error("Error storing credentials", error);
              }
        }
    }
    return(
        <View style={{position:"absolute",top:"9%",backgroundColor:"white",height:"88%",width:"100%"}}>
            <Text style={styles}>Login</Text>
            <View style={{width:"70%",backgroundColor:"black",color:"white",position:"relative",left:"10%",height:"40",top:"20"}}>
                <Text style={inputLabel}>UserName</Text>
            </View>
            <View style={{width:"70%",color:"white",position:"relative",left:"10%",borderRadius:"15%",top:"30",borderColor:"black"}}>
            <TextInput style={inputText} value={inputdata.UserName} onChange={(e)=>{setInputData({UserName:e.target.value})}} />
            </View>
            <View style={{width:"70%",backgroundColor:"black",color:"white",position:"relative",left:"10%",height:"45",top:"50"}}>
                <Text style={inputLabel}>Password</Text>
            </View>
            <View style={{width:"70%",color:"white",position:"relative",left:"10%",borderRadius:"15%",top:"60",borderColor:"black"}}>
            <TextInput style={inputText} value={inputdata.Password} onChange={(e)=>{setInputData({Password:e.target.value})}} />
            </View>
            <View style={{width:"70%",position:"relative",left:"10%",height:"45",top:"90"}}>
                <Button title="LogIn" onPress={HandleLogIn} />
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    color:"black",
    fontSize:25,
    fontWeight:700,
    textAlign:"center"
})
const inputLabel=StyleSheet.create({
    fontSize:19,
    fontWeight:500,
    color:"white",
    textAlign:"center",
    borderColor:"black"

})
const inputText=StyleSheet.create({
    color:"black",
    fontSize:17,
    fontWeight:700,
    borderWidth: 1,
     borderColor: 'black', 
     borderRadius: 10 
})
