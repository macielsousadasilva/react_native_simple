import styles from "./styles";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useNavigation, DrawerNavigationState } from "@react-navigation/native";

//importa codigos SVG
import svg from "../../assets/svg";

// components
import Card from "../../components/Card";
import Button from "../../components/Button";

// store
import store from "../../store";

const Home = () => {
  const navigation = useNavigation();
  const [newStore, setNewStore] = useState<string>();

  useEffect(() => {
    console.log("Executa sempre que inicia o componente ou atualiza o newStore");
  }, [newStore]);

  return (
    <>
      <KeyboardAvoidingView
        //muito importante para teclado com IOS
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View
          style={{
            flex: 1,

          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>  
                <TouchableOpacity
                style={styles.main}
                  onPress={() => {
                    navigation.navigate('Profile');              
                  }}
                >
                  <Text>Você está na Home - Ir para Profile</Text>
                </TouchableOpacity>          
            </View>

            <Card 
              page = {'Profile'}
              svg = {svg.coracao}
              titulo = {'Titulo da Card'}
              subTitle = {'Sub Titulo'}
             />
            <Button 
              page = {'Profile'}
              texto = {'Texto do Botão'}
             />
          </ScrollView>          
        </View>
      </KeyboardAvoidingView>        
    </>
  );
};

export default Home;
