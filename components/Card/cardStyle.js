import { StyleSheet, Dimensions } from "react-native";
const CARD_WIDTH = Dimensions.get("window").width / 2 - 24;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 0,
    margin: 8,
    width: CARD_WIDTH,
    elevation: 3,
    cursor: "pointer",
    position: "relative",
  },
  image: {
    width: CARD_WIDTH - 32,
    height: 180,
    resizeMode: "contain",
    borderRadius: 10,
    marginHorizontal: 8,
  },
  info: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  price: {
    color: "#000000",
    fontSize: 16,
    marginTop: 4,
    fontWeight: 800,
  },
  rating: {
    color: "#f39c12",
    fontSize: 12,
    marginTop: 2,
  },
  description: {
    color: "#555",
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyButton: {
    paddingHorizontal: 6,
  },
  qtyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  qtyText: {
    fontSize: 14,
    marginHorizontal: 6,
    width: 20,
    textAlign: "center",
  },
  buyButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },

  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#A7A7A7",
  },
  tagText: {
    fontSize: 12,
    color: "#000",
  },
  saleTag: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#3F3F3F",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    zIndex: 1,
  },
  saleTagText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: 900,
  },
});
