import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    marginLeft: 10,
    marginRight: 10,
  },

  image: {
    margin: "5%",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    color: "#373F46",
  },

  subTitle: {
    fontSize: 12,
    color: "#91A3AD",
  }
});

export default style;
