import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ HandleChangePage, setIsLoggedin, isLoggedIn }) => {
  const [inputdata, setInputData] = useState({ UserName: "", Password: "" });

  useEffect(() => {
    const checkLogout = async () => {
      if (isLoggedIn) {
        Alert.alert(
          "Logout",
          "Do you want to logout?",
          [
            { text: "Cancel", onPress: () => { HandleChangePage("Home") }, style: "cancel" },
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

  const HandleLogIn = async () => {
    if (inputdata.UserName.trim() === "" || inputdata.Password.trim() === "") {
      if (inputdata.UserName.trim() === "") {
        Alert.alert("Enter UserName");
      } else if (inputdata.Password.trim() === "") {
        Alert.alert("Enter Password");
      }
    } else {
        Alert.alert("Login Successful");
        await AsyncStorage.setItem("Credentials", JSON.stringify(inputdata));
        HandleChangePage("Home");
        setIsLoggedin(true);
    }
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn && (
        <View style={styles.loginBox}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.inputLabel}>UserName</Text>
          <TextInput
            style={styles.inputText}
            value={inputdata.UserName}
            placeholder="Enter Username"
            onChangeText={(value) => setInputData({ ...inputdata, UserName: value })}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            value={inputdata.Password}
            placeholder="Enter Password"
            onChangeText={(value) => setInputData({ ...inputdata, Password: value })}
          />

          <View style={styles.buttonContainer}>
            <Button title="Log In" onPress={HandleLogIn} />
          </View>
        </View>
      )}

      {/* Heading Text */}
      <View style={styles.headingContainer}>
        <Text style={styles.footerText}>* Welcome To ReactDev Academy *</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    width: "80%",
    backgroundColor: "white",
    padding: 90,
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    color: "black",
    fontSize: 25,
    fontWeight: '700', // Correct as string
    textAlign: "center",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '500', // Correct as string
    color: "black",
    marginTop: 10,
    marginBottom: 5,
  },
  inputText: {
    color: "black",
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 10,
  },
  headingContainer: {
    position: "absolute",
    top: 100,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  footerText: {
    color: "black",
    textAlign: "center",
    fontSize: 17,
    fontWeight: '700', // Correct as string
  },
});
