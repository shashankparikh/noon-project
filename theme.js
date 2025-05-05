// theme.js
const COLORS = {
  primary: "#ff9900", // orange (used for buttons, highlights)
  secondary: "#3498db", // blue (cart button in product details)
  background: "#fff", // white background
  surface: "#f5f5f5", // light gray (banners, images background)
  surfaceAlt: "#f9f9f9", // slightly darker gray (cards, review containers)
  textPrimary: "#000", // black text
  textSecondary: "#555", // dark gray text
  textMuted: "#777", // muted gray text
  textLight: "#fff", // white text
  textHighlight: "#333", // deep gray
  border: "#ccc", // light border color
  error: "#ff3333", // red (remove button)
  rating: "#f1c40f", // yellow (rating stars)
};

const FONT_SIZES = {
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
  xlarge: 22,
  xxlarge: 24,
  heading: 28,
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 30,
};

const BORDER_RADIUS = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  round: 30,
};

export { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS };
