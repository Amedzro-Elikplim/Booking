import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export const About = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Average cost</Text>
        <Text>$20</Text>
      </View>

      <View>
        <Text>Hours</Text>
        <Text>11am - 6pm</Text>
      </View>

      <View>
        <Text>Phone</Text>
        <Text>(505) 718 0274</Text>
      </View>

      <View>
        <Text>Location</Text>
        <Text>1019 mora ave</Text>
      </View>

      <View>
        <Text>Services</Text>
        <Text>Dine-in. Takeaway</Text>
      </View>

      <View>
        <Text>Amenities</Text>
        <Text>Wifi</Text>
      </View>
    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  
})
