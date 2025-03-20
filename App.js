import { StyleSheet, Text, View } from 'react-native';
import Home from './app/Components/Home';
import Navbar from './app/subcomponents/Navbar';
import { useState } from 'react';
import About from './app/Components/About';
import Contact from './app/Components/Contact';
import Login from './app/Components/Login';
import Footer from './app/subcomponents/Footer';

export default function App() {
  const [isLoggedIn,setIsLoggedin]=useState(false)
  const [SelectPage,setSelectpage]=useState("Home")

  const HandleChangePage=(value)=>{
    setSelectpage(value)
  }
  return (
    <View style={styles.container}>
      <Navbar HandleChangePage={HandleChangePage} isLoggedIn={isLoggedIn} />
       {SelectPage==="Home" &&<Home/>}
       {SelectPage==="AboutUs" && <About/>}
       {SelectPage==="Contact" && <Contact/>}
       {SelectPage==="Login" && <Login HandleChangePage={HandleChangePage} setIsLoggedin={setIsLoggedin} isLoggedIn={isLoggedIn} />}
       <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
