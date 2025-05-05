import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS } from "../../theme";

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
    textAlign: "center",
    color: COLORS.textPrimary,
  },
  emptyText: {
    fontSize: FONT_SIZES.xlarge,
    color: COLORS.textPrimary,
    textAlign: "center",
    marginTop: SPACING.lg,
  },
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
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopColor: "#eee",
    backgroundColor: "#fafafa",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff9900",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.textLight,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  checkoutButton: {
    backgroundColor: "#ff9900",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  checkoutButtonText: {
    color: COLORS.textLight,
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cartAnimation: {
    width: 250,
    height: 250,
  },
  cartText: {
    fontSize: 18,
    color: "#777",
    marginTop: 10,
  },
  emptyCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
});
