import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import Spinner from "../components/Spinner";
import { BASEURL } from "../api.config";

export const Signup = ({ navigation }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    try {
      if (
        firstname === "" ||
        lastname === "" ||
        email === "" ||
        password === ""
      )
        return;
      setLoading(true);

      const data = {
        first_name: firstname,
        last_name: lastname,
        email,
        password,
      };

      const user = await fetch(`${BASEURL}users/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (user.status === 201) {
        setLoading(false);
        navigation.navigate("Login");
        return;
      }

      setLoading(false);
      alert("User already exist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <View style={style.topView}>
          <Text style={style.title}>Sign up</Text>
          <Text>Join the lunch Hub family by creating account with us</Text>
        </View>

        <View style={style.inputContainer}>
          <Input
            placeholder="Firstname"
            onChangeText={(value) => setFirstName(value)}
            type="text"
            value={firstname}
          />
          <Input
            placeholder="Lastname"
            type="text"
            onChangeText={(value) => setLastname(value)}
            value={lastname}
          />
          <Input
            placeholder="Email"
            type="text"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
        </View>

        <View style={style.btnsContainer}>
          {loading ? (
            <Spinner />
          ) : (
            <TouchableOpacity
              onPress={() => createAccount()}
              style={style.signUpBtn}
            >
              <Text style={style.btnText}>Sign up</Text>
            </TouchableOpacity>
          )}
          <Text style={{ marginTop: 15 }}>Already have an account?</Text>
          <Text
            style={style.loginText}
            onPress={() => navigation.navigate("Login")}
          >
            Sign In
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    flex: 0.6,
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
    minWidth: 320,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  loginText: {
    fontWeight: "bold",
    marginTop: 15,
  },
  btnsContainer: {
    alignItems: "center",
  },
});
