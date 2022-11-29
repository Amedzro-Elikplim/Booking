import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
export const Welcome = ({ navigation }) => {
  return (
   
     <SafeAreaView style={style.container}>
       <ScrollView contentContainerStyle={style.container}>
        <View style={style.topView}>
          <Text style={style.headerText}>THE LUNCH HUB</Text>
          <Text style={{color: 'white', fontSize: 10}}>DISCOVER OUR AMAZING AND DELICIOUS MEALS</Text>
        </View>

        <View style={style.btnContainer}>

          <TouchableOpacity style={style.signUpBtn} onPress={() => navigation.navigate('Sign up')}>
            <Text style={style.btnText} >Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.signInbtn} onPress={() => navigation.navigate('Login')}>
            <Text style={style.btnText} >Sign In</Text>
          </TouchableOpacity>

        </View>
        </ScrollView>
    </SafeAreaView>
  
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000FF',
  },

  topView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
  },

  btnContainer: {
    marginTop: 15,
    minWidth: 320,
    flex: 0.6,
    justifyContent: "center"
  },

  headerText: {
    color: 'white',
    fontSize: 40
  },
  signInbtn: {
    borderWidth: 1,
    borderColor: '#8F3A0AFF',
    borderRadius: 50,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10
  },
  signUpBtn: {
    backgroundColor: '#8F3A0AFF',
    borderRadius: 50,
    paddingBottom: 10,
    paddingTop: 10
  },

  btnText: {
    color: 'white',
    textAlign: 'center'
  }
})