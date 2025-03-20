import { StyleSheet } from "react-native";

export const NavbarCss=StyleSheet.create({
    navbar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        position:"absolute",
        paddingTop:"11%",
        paddingLeft:"2%",
        paddingRight:"2%",
        top:0,
        height:"9%",
        width:"100%",
        backgroundColor:"aqua",
        color:"white"
    },
    NavButton:{
    fontSize:18,
    color:"black",
    backgroundColor:"aqua",
    fontWeight:"600",
    }
})