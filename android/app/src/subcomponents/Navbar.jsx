import {  Text,View} from 'react-native';
import { NavbarCss } from '../styles/Navbar.css.js';
const Navbar=({HandleChangePage,isLoggedIn})=>{
    const Logout=async()=>{
        if(isLoggedIn){
            await AsyncStorage.clear();
        }else{

        }
    }
    const HandleNavigate=(value)=>{
        if(isLoggedIn){
            HandleChangePage(value)
        }
    }
    return(
        <View style={NavbarCss.navbar}>
            <Text style={NavbarCss.NavButton} onPress={() => HandleNavigate("Home")}>Home</Text>
            <Text style={NavbarCss.NavButton} onPress={()=>HandleNavigate("AboutUs")}>About</Text>
            <Text style={NavbarCss.NavButton} onPress={() => HandleNavigate("Contact")}>Contact</Text>
            <Text style={NavbarCss.NavButton} onPress={() => HandleNavigate("Login")}>{isLoggedIn? "Logout":"Login"}</Text>
        </View>
    )
}
export default Navbar