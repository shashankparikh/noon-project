import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  recentContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    height: 100,
  },
  recentItem: {
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    marginBottom: 6,
  },
  recentText: {
    color: "#333",
  },
  loader: {
    marginTop: 20,
  },
  noDataContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  noDataText: { fontSize: 16, color: "#777" },
});
