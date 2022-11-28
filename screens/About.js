import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const About = () => {
  return (
    <SafeAreaView>
      <View style={style.subContainer}>
        <Text style={style.text}>Average cost</Text>
        <Text>$20</Text>
      </View>

      <View style={style.subContainer}>
        <Text style={style.text}>Hours</Text>
        <Text>11am - 6pm</Text>
      </View>

      <View style={style.subContainer}>
        <Text style={style.text}>Phone</Text>
        <Text>(505) 718 0274</Text>
      </View>

      <View style={style.subContainer}>
        <Text style={style.text}>Location</Text>
        <Text>1019 mora ave</Text>
      </View>

      <View style={style.subContainer}>
        <Text style={style.text}>Services</Text>
        <Text>Dine-in. Takeaway</Text>
      </View>

      <View style={style.subContainer}>
        <Text style={style.text}>Amenities</Text>
        <Text>Wifi</Text>
      </View>

      <TouchableOpacity style={style.btn}>
        <Text style={style.btnText}>Book</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 8
  },  
  text: {
    color: "#8F3A0A"
  },

  btn: {
    backgroundColor: 'black',
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
})
