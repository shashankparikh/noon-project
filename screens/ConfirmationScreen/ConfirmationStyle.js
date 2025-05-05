import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.md,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
    color: COLORS.black,
  },
  message: {
    fontSize: 16,
    color: COLORS.grayDark,
    textAlign: "center",
    marginBottom: SPACING.xxl,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    cursor: "pointer",
  },
  buttonText: { color: COLORS.textLight, fontSize: 18, fontWeight: "bold" },
});
