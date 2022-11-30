import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BASEURL } from "../api.config";
import Spinner from "../components/Spinner";

export const ViewBooking = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const { data } = route.params;
  const { firstname, lastname, email, time, date, phone, restaurant, menu, table } = data;
  


  const onSubmit = async () => {
    try {
      setLoading(true);

      const booking = await fetch(`${BASEURL}users/booking`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }); 

      if (booking.status === 201) {
        alert("booked successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <SafeAreaView style={style.container}>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Firstname:</Text>
        <Text style={style.value}>{firstname}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Lastname:</Text>
        <Text style={style.value}>{lastname}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Email:</Text>
        <Text style={style.value}>{email}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>restaurant:</Text>
        <Text style={style.value}>{restaurant}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Menu:</Text>
        <Text style={style.value}>{menu}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Date:</Text>
        <Text style={style.value}>{date}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Time:</Text>
        <Text style={style.value}>{time}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Table number:</Text>
        <Text style={style.value}>{table}</Text>
      </View>
      <View style={style.doubleGrid}>
        <Text style={style.label}>Phone number:</Text>
        <Text style={style.value}>{phone}</Text>
      </View>

      <View style={style.bottomView}>
        {loading ? (
          <Spinner />
        ) : (
          <TouchableOpacity style={style.btn} onPress={() => onSubmit()}>
            <Text style={style.submitbtn}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  submitbtn: {
    color: "white"
    
  },
  doubleGrid: {
    display: "flex",
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    marginRight: 15,
  },
  value: {
    fontSize: 20,
    color: "red",
  },
  btn: {
    width: 200,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center"
  },
  bottomView: {
    marginTop: 20
  }
});