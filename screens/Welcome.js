import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
export const Welcome = ({ navigation }) => {
  return (

    <SafeAreaView style={style.container}>
        <Text style={style.headerText}>THE LUNCH HUB</Text>
        <Text style={{color: 'white'}}>DISCOVER OUR AMAZING AND DELICIOUS MEALS</Text>

        <View style={style.btnContainer}>

          <TouchableOpacity style={style.signUpBtn} onPress={() => navigation.navigate('Sign up')}>
            <Text style={style.btnText} >Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.signInbtn} onPress={() => navigation.navigate('Login')}>
            <Text style={style.btnText} >Sign In</Text>
          </TouchableOpacity>

        </View>
    </SafeAreaView>
  
  )
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000000FF',
    flex: 1
  },

  btnContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: "column",
    minWidth: 320
  },

  headerText: {
    color: 'white',
    fontSize: 22
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