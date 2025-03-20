import { useEffect, useState } from "react"
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
export default Login=({HandleChangePage,setIsLoggedin,isLoggedIn})=>{
    const [inputdata,setInputData]=useState({UserName:"",Password:""})

    useEffect(() => {
        const checkLogout = async () => {
          if (isLoggedIn) {
            Alert.alert(
              "Logout",
              "Do you want to logout?",
              [
                { text: "Cancel",onPress:()=>{HandleChangePage("Home")}, style: "cancel" },
                {
                  text: "Logout",
                  onPress: async () => {
                    await AsyncStorage.clear();
                    setIsLoggedin(false);
                    Alert.alert("Logout Successful");
                  },
                },
              ],
              { cancelable: false }
            );
          }
        };
        checkLogout();
      }, []);
      

    const HandleLogIn=async()=>{
        if(inputdata.UserName.trim()===""|| inputdata.Password.trim()==""){
           if(inputdata.UserName.trim()===""){
            Alert.alert("Enter UserName")
           }else if(inputdata.Password.trim()===""){
            Alert.alert("Enter Password")
           }
        }else{
            Alert.alert("Login Successfull")
            try {
                await AsyncStorage.setItem("Credentials", JSON.stringify(inputdata));
                HandleChangePage("Home")
                setIsLoggedin(true)
              } catch (error) {
                console.error("Error storing credentials", error);
              }
        }
    }
    return(
        <>
            {isLoggedIn ? null:(<View style={{position:"absolute",top:"9%",backgroundColor:"white",height:"88%",width:"100%"}}>
            <Text style={styles}>Login</Text>
            <View style={{width:"70%",backgroundColor:"black",color:"white",position:"relative",left:"13%",height:"40",top:"20"}}>
                <Text style={inputLabel}>UserName</Text>
            </View>
            <View style={{width:"70%",color:"white",position:"relative",left:"13%",borderRadius:"15%",top:"30",borderColor:"black"}}>
            <TextInput style={inputText} value={inputdata.UserName}  onChangeText={(value) => setInputData({ ...inputdata, UserName: value })} />
            </View>
            <View style={{width:"70%",backgroundColor:"black",color:"white",position:"relative",left:"13%",height:"45",top:"50"}}>
                <Text style={inputLabel}>Password</Text>
            </View>
            <View style={{width:"70%",color:"white",position:"relative",left:"13%",borderRadius:"15%",top:"60",borderColor:"black"}}>
            <TextInput style={inputText} secureTextEntry={true} value={inputdata.Password}  onChangeText={(value) => setInputData({ ...inputdata, Password: value })} />
            </View>
            <View style={{width:"70%",position:"relative",left:"13%",height:"45",top:"90"}}>
                <Button title="LogIn" onPress={HandleLogIn} />
            </View>
        </View>)}
        </>
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
