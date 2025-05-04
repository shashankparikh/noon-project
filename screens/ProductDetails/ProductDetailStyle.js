import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    paddingBottom: 100,
    alignItems: "center",
  },
  image: {
    width: width - 32,
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  price: {
    color: "#000000",
    fontSize: 16,
    marginVertical: 8,
    fontWeight: 800,
  },
  rating: {
    color: "#f1c40f",
    marginTop: 4,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "left",
    color: "#555",
  },
  cartButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  quantityButton: {
    backgroundColor: "#ff9900", // orange button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 10,
  },

  quantityButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    minWidth: 30,
    textAlign: "center",
  },

  reviewContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    minWidth: 300,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewRating: {
    fontSize: 14,
    color: "#ff9900",
    marginLeft: 8,
  },
  reviewComment: {
    fontSize: 16,
    color: "#555",
    marginVertical: 8,
    fontStyle: "italic",
    textAlign: "left",
  },
  reviewDate: {
    fontSize: 12,
    color: "#777",
  },
  cartButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#ff9900",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  rating: {
    color: "#000",
  },
});
