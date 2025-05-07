import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS } from "../../theme";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.surfaceAlt,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    elevation: 1,
  },
  infoContainer: {
    marginBottom: SPACING.md,
  },
  itemTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  itemDescription: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
    marginVertical: SPACING.xs,
  },
  reviewerName: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textMuted,
    fontStyle: "italic",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  quantityButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
    marginHorizontal: SPACING.sm,
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
    minWidth: 30,
    textAlign: "center",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS.lg,
    marginRight: SPACING.md,
  },
  removeButton: {
    backgroundColor: COLORS.error,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    marginTop: SPACING.sm,
    alignSelf: "flex-start",
  },
  removeButtonText: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.regular,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: FONT_SIZES.regular,
    fontWeight: "bold",
    color: COLORS.textHighlight,
    marginVertical: SPACING.sm,
  },
  bottomCartWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
