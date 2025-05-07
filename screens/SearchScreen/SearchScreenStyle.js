import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  input: {
    margin: SPACING.sm,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    borderRadius: BORDER_RADIUS.md,
  },
  recentContainer: {
    marginHorizontal: SPACING.sm,
    marginBottom: SPACING.sm,
    height: 100,
  },
  recentItem: {
    padding: SPACING.sm,
    backgroundColor: "#f0f0f0",
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.xs,
  },
  recentText: {
    color: COLORS.grayDark,
  },
  loader: {
    marginTop: SPACING.md,
  },
  noDataContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  noDataText: { fontSize: 16, color: COLORS.grayMedium },
});
