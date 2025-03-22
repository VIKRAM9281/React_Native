import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Home from './android/app/src/Components/Home';
import Navbar from './android/app/src/subcomponents/Navbar';
import { useState } from 'react';
import About from './android/app/src/Components/About';
import Contact from './android/app/src/Components/Contact';
import Login from './android/app/src/Components/Login';
import Footer from './android/app/src/subcomponents/Footer';

export default function App() {
  const [isLoggedIn,setIsLoggedin]=useState(false)
  const [SelectPage,setSelectpage]=useState("Home")

  const HandleChangePage=(value)=>{
    setSelectpage(value)
  }
  return (
    <View style={styles.container}>
      <Navbar HandleChangePage={HandleChangePage} isLoggedIn={isLoggedIn} />
       {SelectPage==="Home" && !isLoggedIn? <Login HandleChangePage={HandleChangePage} setIsLoggedin={setIsLoggedin} isLoggedIn={isLoggedIn}/>: isLoggedIn && SelectPage==="Home"&& <Home/>}
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
