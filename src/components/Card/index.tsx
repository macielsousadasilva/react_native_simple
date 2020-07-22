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


interface Params {
  page: string;
  svg: string;
  titulo: string;
  subTitle: string;
}

const Card = (props: Params) => {
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
            <View style={styles.main}>
              <View style={{ width: "20%", height: 65 }}>
                <SvgCss
                  style={styles.image}
                  xml={props.svg}
                  width="50"
                  height="50"
                />
              </View>
              <View style={{ width: "80%", height: 50 }}>
                <Text style={styles.title}>{props.titulo}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        
      </View>
    </>
  );
};

export default Card;
