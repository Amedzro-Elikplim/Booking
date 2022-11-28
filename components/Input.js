import React from "react";
import { TextInput, StyleSheet } from "react-native";

function Input({ ...children }) {
  return <TextInput style={style.container} {...children} />;
}

export default Input;

const style = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    minWidth: 320,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: "#ffff",
  },
});
