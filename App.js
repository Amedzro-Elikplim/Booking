import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "./screens/Welcome";
import { Landing } from "./screens/Landing";
import { Signup } from "./screens/Signup";
import { Login } from "./screens/Login";
import { About } from "./screens/About";
import { Booking } from "./screens/Booking";
import { Details } from "./screens/Details";
import { ViewBooking } from "./screens/ViewBooking";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign up">
        <Stack.Screen name="Table booking app" component={Landing} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Sign up"  component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Book" component={Booking} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="View Booking" component={ViewBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


