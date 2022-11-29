import React, {useState} from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { style as btnStyle } from "./About"
import DropDownPicker from 'react-native-dropdown-picker';

export const Booking = () => {
   const [isDateOpen, setIsDateOpen] = useState(false);
   const [dateValue, setDateValue] = useState(null);
   const [dateItems, setDateItems] = useState([
     {label: 'Apple', value: 'apple'},
     {label: 'Banana', value: 'banana'}
   ]);

   const [isTimeOpen, setIsTimeOpen] = useState(false);
   const [timeValue, setTimeValue] = useState(null);
   const [timeItems, setTimeItems] = useState([
     {label: 'Apple', value: 'apple'},
     {label: 'Banana', value: 'banana'}
   ]);


   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [menuValue, setMenuValue] = useState(null);
   const [menuItems, setMenuItems] = useState([
     {label: 'Apple', value: 'apple'},
     {label: 'Banana', value: 'banana'}
   ]);

  return (

    <SafeAreaView style={style.parent}>
      <Text style={{color: '#8F3A0A'}}>Fill the form below to book a table</Text>

      <View style={style.dropdownContainer}>
        <DropDownPicker
          open={IsDateOpen}
          value={dateValue}
          items={dateItems}
          setOpen={IsDateOpen}
          setValue={setDateValue}
          setItems={setDateItems}
          style={style.dropdown}
        />



      </View>

       <TouchableOpacity style={btnStyle.btn}>
         <Text style={btnStyle.btnText}>Continue</Text>
       </TouchableOpacity>

    </SafeAreaView>

  )
};

const style = StyleSheet.create({
    parent: {
        flex: 1,
    },
  dropdownContainer: {
//      display: 'flex'
  },
  dropdown: {
    borderRadius: 10,
    width: 100
  }
})
