import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { style as btnStyles } from "./Signup";
export const Login = ({ navigation }) => {
  return (

      <SafeAreaView style={btnStyles.container}>
        <View>
          <Text style={btnStyles.title}>Welcome Back</Text>
          <Text>Sign in to continue and connect with the TLH family</Text>
        </View>

        <View>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" secureTextEntry={true} />
        </View>

        <View style={btnStyles.btnsContainer}>
          <TouchableOpacity style={btnStyles.signUpBtn} >
            <Text style={btnStyles.btnText} >Sign In</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 15}}>Don't have an account yet?</Text>
          <Text style={btnStyles.loginText} onPress={() => navigation.navigate('Sign up')}>Sign Up</Text>
        </View>
      </SafeAreaView>
  )
};
