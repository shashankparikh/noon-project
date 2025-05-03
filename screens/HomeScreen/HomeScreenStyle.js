import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  bannerList: {
    height: 180,
    marginBottom: 10,
  },
  bannerImage: {
    width: width - 32,
    height: 180,
    resizeMode: "contain",
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#f5f5f5",
  },
  textInput: {
    color: "#000",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    margin: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  searchIcon: { marginRight: 8 },
});
