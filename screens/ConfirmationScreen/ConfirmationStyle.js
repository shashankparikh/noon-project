import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  heading: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  message: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff9900",
    padding: 16,
    borderRadius: 8,
    cursor: "pointer",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
