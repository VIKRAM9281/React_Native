import { StyleSheet, Text, View } from "react-native"

const Footer=()=>{
    return(
        <View style={styles.footer}>
            <Text style={{textAlign:"center",color:"white"}}>© 2025 Company, Inc. All rights reserved.</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    footer:{
        position:"absolute",
        bottom:"4",
        backgroundColor:"black",
        color:"black",
        height:"4%",
        width:"100%",
        padding:"10"
    }
})
export default Footer