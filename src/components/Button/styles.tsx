import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({


  button: {
    margin:10,
    height: 70,
    backgroundColor: "#002aff",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },

  button_texto: {
    color: "#ffffff"
  }
});

export default style;
