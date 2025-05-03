import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  ImageContainer: {
    height: 250,
    marginBottom: 10,
  },
  Image: {
    width: width - 32,
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#ffffff",
  },
});
