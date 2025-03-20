import {  Text,View} from 'react-native';
import { NavbarCss } from '../../styles/Navbar.css';
const Navbar=({HandleChangePage})=>{
    return(
        <View style={NavbarCss.navbar}>
            <Text style={NavbarCss.NavButton} onPress={() => HandleChangePage("Home")}>Home</Text>
            <Text style={NavbarCss.NavButton} onPress={()=>HandleChangePage("AboutUs")}>About</Text>
            <Text style={NavbarCss.NavButton} onPress={() => HandleChangePage("Contact")}>Contact</Text>
            <Text style={NavbarCss.NavButton} onPress={() => HandleChangePage("Login")}>Login</Text>
        </View>
    )
}
export default Navbar