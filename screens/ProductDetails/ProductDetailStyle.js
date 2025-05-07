import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from "../../theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.textLight,
  },
  container: {
    padding: SPACING.lg,
    paddingBottom: 100,
    alignItems: "center",
  },
  image: {
    width: width - SPACING.xl,
    height: 250,
    resizeMode: "contain",
    borderRadius: BORDER_RADIUS.md,
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.grayLighter,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: SPACING.lg,
    textAlign: "center",
  },
  price: {
    color: COLORS.black,
    fontSize: 16,
    marginVertical: SPACING.sm,
    fontWeight: 800,
  },
  rating: {
    color: COLORS.yellow,
    marginTop: SPACING.xs,
  },
  description: {
    marginTop: SPACING.lg,
    fontSize: 16,
    textAlign: "left",
    color: COLORS.grayDark,
  },
  cartButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: COLORS.textLight,
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
    backgroundColor: COLORS.primary, // orange button
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
    color: COLORS.textHighlight,
    minWidth: 30,
    textAlign: "center",
  },

  reviewContainer: {
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    shadowColor: COLORS.textPrimary,
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
    color: COLORS.textHighlight,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewRating: {
    fontSize: 14,
    color: COLORS.primary,
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
    color: COLORS.textMuted,
  },
  cartButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  cartButtonText: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
  },
  ratingWrapper: {
    flexDirection: "row",
    gap: 4,
  },
  rating: {
    color: COLORS.textPrimary,
  },
});
