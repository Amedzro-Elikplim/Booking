import React, {useState} from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { BASEURL } from "../api.config";
import Input from "../components/Input";
import { style as btnStyles } from "./Signup";
import Spinner from "../components/Spinner";


export const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Login = async () => {

    try {

      if (email === "" || password === "") return;
      setLoading(true);
      const data = {
        email,
        password
      }; 
      const user = await fetch(`${BASEURL}users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      if (user) {
        setLoading(false);
        navigation.navigate("Book");
      }
         
        
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.topView}>
        <Text style={btnStyles.title}>Welcome Back</Text>
        <Text>Sign in to continue and connect with the TLH family</Text>
      </View>

      <View style={style.middleView}>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          type="password"
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View style={btnStyles.btnsContainer}>
        {loading ? (
          <Spinner />
        ) : (
          <TouchableOpacity style={btnStyles.signUpBtn} onPress={() => Login()}>
            <Text style={btnStyles.btnText}>Sign In</Text>
          </TouchableOpacity>
        )}

        <Text style={{ marginTop: 15 }}>Don't have an account yet?</Text>
        <Text
          style={btnStyles.loginText}
          onPress={() => navigation.navigate("Sign up")}
        >
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  topView: {
    flex: 0.2,
    marginTop: 10,
  },
  middleView: {
    flex: 0.6,
    justifyContent: "center"
  }
})