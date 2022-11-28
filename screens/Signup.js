import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import Input from "../components/Input";

export const Signup = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topView}>
        <Text style={style.title}>Sign up</Text>
        <Text>Join the lunch Hub family by creating account with us</Text>
      </View>

      <View>
        <Input placeholder="firstname" />
        <Input placeholder="lastname" type="text" />
        <Input placeholder="email" type="text" />
        <Input placeholder="password" type="password" secureTextEntry={true} />
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
});
