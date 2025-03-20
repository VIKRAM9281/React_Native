import {  Text,View} from 'react-native';
import { NavbarCss } from '../../styles/Navbar.css';
const Navbar=({HandleChangePage,isLoggedIn})=>{
    const Logout=async()=>{
        if(isLoggedIn){
            await AsyncStorage.clear();
        }else{

        }
    }
    return(
        <View style={NavbarCss.navbar}>
            <Text style={NavbarCss.NavButton} onPress={() => HandleChangePage("Home")}>Home</Text>
            <Text style={NavbarCss.NavButton} onPress={()=>HandleChangePage("AboutUs")}>About</Text>
            <Text style={NavbarCss.NavButton} onPress={() => HandleChangePage("Contact")}>Contact</Text>
            <Text style={NavbarCss.NavButton} onPress={() => HandleChangePage("Login")}>{isLoggedIn? "Logout":"Login"}</Text>
        </View>
    )
}
export default Navbar