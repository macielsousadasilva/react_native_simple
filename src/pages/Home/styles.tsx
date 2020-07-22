import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  main: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 30,
    margin: 10,
  }  
});

export default styles;
