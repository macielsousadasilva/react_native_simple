import styles from "./styles";
import React, { useState, useEffect, Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import Svg, { Use, SvgUri, SvgXml, SvgCss } from "react-native-svg";
import { Asset } from "expo-asset";

import svg from "../../assets/svg";
import style from "./styles";
import store from "../../store";

//o que ele ira receber
interface Params {
  page: string;
  texto: string;
}

const Button = (props: Params) => {
  const navigation = useNavigation();
  const route = useRoute();
  const routParams = route.params as Params;

  return (
    <>
      <View>        
          <TouchableOpacity
            onPress={() => {
              {
                props.page != "" && navigation.navigate(props.page);
              }
              console.log("Page direcionada", props.page);
            }}
          >
            <View>              
              <View style={styles.button}>
                <Text style={styles.button_texto}>{props.texto}</Text>
              </View>
            </View>
          </TouchableOpacity>
      </View>
    </>
  );
};

export default Button;
