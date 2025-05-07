import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS } from "../../theme";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  heading: {
    fontSize: FONT_SIZES.xxlarge,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
    color: COLORS.textPrimary,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.sm,
    borderBottomWidth: 0.4,
  },
  itemText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textPrimary,
    paddingVertical: 10,
    flexShrink: 1,
  },
  itemTextPrice: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textPrimary,
    paddingVertical: 10,
  },
  emptyText: {
    textAlign: "center",
    color: COLORS.textMuted,
    marginVertical: SPACING.xl,
    fontSize: FONT_SIZES.medium,
  },
  section: {
    marginTop: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    marginBottom: SPACING.md,
    color: COLORS.textPrimary,
  },
  paymentMethod: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.medium,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SPACING.xs,
  },
  totalLabel: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  totalValue: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  placeOrderButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: "center",
    marginVertical: SPACING.lg,
  },
  placeOrderText: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
  },
});
