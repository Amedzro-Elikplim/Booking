import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { style as btnStyle } from "./About";
import DropDownPicker from "react-native-dropdown-picker";
import { BASEURL } from "../api.config";

export const Booking = ({navigation}) => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [dateItems, setDateItems] = useState([]);

  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [timeValue, setTimeValue] = useState(null);
  const [timeItems, setTimeItems] = useState([]);

  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const [restaurantValue, setRestaurantValue] = useState(null);
  const [restaurantItems, setRestaurantItems] = useState([]);

  const [isMenusOpen, setIsMenusOpen] = useState(false);
  const [menusValue, setMenusValue] = useState(null);
  const [menusItems, setMenusItems] = useState([]);

  const [isTablesOpen, setIsTablesOpen] = useState(false);
  const [tablesValue, setTablesValue] = useState(null);
  const [tablesItems, setTablesItems] = useState([]);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onLoad = async () => {
    const dateItemsTemp = [];
    const restaurantItemsTemp = [];
    const menusTemp = [];
    const tableTemp = [];
    const timeTemp = [];

    try {
      const restaurant = await fetch(`${BASEURL}admin/restaurants`);
      const menus = await fetch(`${BASEURL}admin/menus`);
      const tables = await fetch(`${BASEURL}admin/tables`);

      const data = await restaurant.json();
      const menutemp = await menus.json();
      const tabletemp = await tables.json();

      menutemp.map((item) => {
        menusTemp.push({ label: item.name, value: item.name });
      });

      tabletemp.map((item) => {
        tableTemp.push({ label: item.table_number, value: item.table_number });
      });

      data.map((item) => {
        dateItemsTemp.push({ label: item.Hours, value: item.Hours });
        restaurantItemsTemp.push({
          label: item.restaurant_name,
          value: item.restaurant_name,
        });
        timeTemp.push({ label: item.date, value: item.date });
      });

      setDateItems(dateItemsTemp);
      setRestaurantItems(restaurantItemsTemp);
      setMenusItems(menusTemp);
      setTablesItems(tableTemp);
      setTimeItems(timeTemp);
    } catch (error) {
      console.log(error);
    }
  };


  const saveBooking = () => {
    const data = {
      time: dateValue,
      date: timeValue,
      resutaurant: restaurantValue,
      menu: menusValue,
      table: tablesValue,
      firstname,
      lastname,
      email,
      phone
    };

    navigation.navigate("View Booking", {
      data
    });
  };


  useEffect(() => {
    onLoad();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={style.parent}>
        <Text style={{ color: "#8F3A0A" }}>
          Fill the form below to book a table
        </Text>

        <View style={style.dropdownContainer}>
          <DropDownPicker
            open={isDateOpen}
            zIndex={10}
            placeholder="select time"
            value={dateValue}
            items={dateItems}
            setOpen={setIsDateOpen}
            setValue={setDateValue}
            setItems={setDateItems}
            style={style.dropdown}
          />

          <DropDownPicker
            placeholder="select date"
            zIndex={9}
            open={isTimeOpen}
            value={timeValue}
            items={timeItems}
            setOpen={setIsTimeOpen}
            setValue={setTimeValue}
            setItems={setTimeItems}
            style={style.dropdown}
          />

          <DropDownPicker
            placeholder="select restaurant"
            open={isRestaurantOpen}
            value={restaurantValue}
            items={restaurantItems}
            zIndex={8}
            setOpen={setIsRestaurantOpen}
            setValue={setRestaurantValue}
            setItems={setRestaurantItems}
            style={style.dropdown}
          />

          <DropDownPicker
            placeholder="select menu"
            open={isMenusOpen}
            value={menusValue}
            items={menusItems}
            zIndex={7}
            M
            setOpen={setIsMenusOpen}
            setValue={setMenusValue}
            setItems={setMenusItems}
            style={style.dropdown}
          />
          <DropDownPicker
            placeholder="select table number"
            open={isTablesOpen}
            value={tablesValue}
            items={tablesItems}
            zIndex={6}
            setOpen={setIsTablesOpen}
            setValue={setTablesValue}
            setItems={setTablesItems}
            style={style.dropdown}
          />

          <TextInput
            style={style.inputField}
            placeholder="firsname"
            value={firstname}
            onChangeText={(value) => setFirstName(value)}
          />
          <TextInput
            style={style.inputField}
            placeholder="lastname"
            value={lastname}
            onChangeText={(value) => setLastname(value)}
          />
          <TextInput
            style={style.inputField}
            placeholder="email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={style.inputField}
            placeholder="phone"
            value={phone}
            onChangeText={(value) => setPhone(value)}
          />
        </View>

        <TouchableOpacity style={style.btn} onPress={() => saveBooking()}>
          <Text style={btnStyle.btnText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  dropdownContainer: {
    //      display: 'flex'
  },
  dropdown: {
    borderRadius: 10,
    width: 300,
    margin: 20,
  },
  btn: {
    width: 200,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  inputField: {
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    width: 300,
    borderRadius: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: "#ffff",
  },
});
