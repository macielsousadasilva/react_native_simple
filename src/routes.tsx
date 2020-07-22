import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  useIsDrawerOpen,
  DrawerContentScrollView,
  DrawerView,
  DrawerContent
} from '@react-navigation/drawer';


import Home from "./pages/Home";
import Profile from "./pages/Profile";


import store from "./store";
import { View, Text, SafeAreaView, ScrollView } from "react-native";


const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyle: {
              backgroundColor: "#B2F8F8", //troca a cor do fundo do app em todas as telas
            },
          }}
        >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Profile" component={Profile} />
        </AppStack.Navigator>      
      </NavigationContainer>
    </>
  );
};

export default Routes;
