import React, {useState} from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";
import Input from "../components/Input";

export const Signup = ({ navigation }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    
    try {
      const data = {
        first_name: firstname,
        last_name: lastname,
        email,
        password,
      };

      const user = await fetch(
        "https://booking-app.herokuapp.com/users/register",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
          },
        }
      );

      console.log(user);

      if (user) {
        navigation.navigate("Login");
      }
    } catch (error) {
      return error;
    }
  };


  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.topView}>
          <Text style={style.title}>Sign up</Text>
          <Text>Join the lunch Hub family by creating account with us</Text>
        </View>

        <View style={style.inputContainer}>
          <Input
            placeholder="Firstname"
            onChange={(value) => setFirstName(value)}
          />
          <Input
            placeholder="Lastname"
            type="text"
            onChange={(value) => setLastname(value)}
          />
          <Input
            placeholder="Email"
            type="text"
            onChange={(value) => setEmail(value)}
          />
          <Input
            placeholder="Password"
            type="password"
            secureTextEntry={true}
            onChange={(value) => setPassword(value)}
          />
        </View>

        <View style={style.btnsContainer}>
          <TouchableOpacity style={style.signUpBtn}>
            <Text style={style.btnText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 15 }}>Already have an account?</Text>
          <Text
            style={style.loginText}
            onPress={() => createAccount()}
          >
            Sign In
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topView: {
    margin: 20,
    flex: 0.2,
  },
  inputContainer: {
    flex: 0.7
  },
  title: {
    fontSize: 40,
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
     flex: 0.3,
    alignItems: 'center',
  }
});
