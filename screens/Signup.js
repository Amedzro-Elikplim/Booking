import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Linking } from "react-native";
import Input from "../components/Input";

export const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topView}>
        <Text style={style.title}>Sign up</Text>
        <Text>Join the lunch Hub family by creating account with us</Text>
      </View>

      <View>
        <Input placeholder="Firstname" />
        <Input placeholder="Lastname" type="text" />
        <Input placeholder="Email" type="text" />
        <Input placeholder="Password" type="password" secureTextEntry={true} />
      </View>
      <View style={style.btnsContainer}>
        <TouchableOpacity style={style.signUpBtn}>
          <Text style={style.btnText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 15}} >Already have an account?</Text>
        <Text style={style.loginText} onPress={() => navigation.navigate('Login')}>Sign In</Text>
      </View>
    </SafeAreaView>
  );
};

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topView: {
   margin: 10
  },
  title: {
    fontSize: 20,
    color: "#8F3A0A",
  },
  signUpBtn: {
    backgroundColor: "#000000FF",
    borderRadius: 50,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 320
  },
  btnText: {
    color: "white",
    textAlign: "center"
  },
  loginText: {
    fontWeight: "bold",
    marginTop: 15
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});
