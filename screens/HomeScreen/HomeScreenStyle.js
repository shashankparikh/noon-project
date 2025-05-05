import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "../../theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  bannerList: {
    height: 180,
    marginBottom: 10,
  },
  bannerImage: {
    width: width - 32,
    height: 180,
    resizeMode: "contain",
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: COLORS.surface,
  },
  textInput: {
    color: COLORS.textPrimary,
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
    margin: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  searchIcon: {
    paddingHorizontal: SPACING.sm,
    marginRight: 8,
  },
});
