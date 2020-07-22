import styles from "./styles";
import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { useNavigation, DrawerNavigationState } from "@react-navigation/native";
import axios from "axios";

// store
import store from "../../store";

const Profile = () => {
  const navigation = useNavigation();
  const [newStore, setNewStore] = useState<string>();

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
                  <TouchableOpacity
                    style={styles.main}
                    onPress={() => {
                      navigation.navigate('Home');              
                    }}
                  >
                    <Text>Você está na Profile - Ir para Home</Text>
                  </TouchableOpacity>    
            </ScrollView>            
          </View>
        </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
