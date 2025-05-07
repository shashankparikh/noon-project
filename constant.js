export const BANNERS = [
  "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp",
];

export const tagColors = {
  beauty: "#B5E9FD", // lightBlue
  furniture: "#FFD700", // gold
  default: "#FDE6B5", // sky blue
};

export const CART_REVIEW_TEXT = {
  heading: "Order Summary",
  paymentMethodSection: "Payment Method",
  paymentMethodChange: "(Change)",
  orderSummarySection: "Order Summary",
  subtotalLabel: "Subtotal",
  taxLabel: "Tax (10%)",
  totalLabel: "Total",
  placeOrderButton: "Place Order",
  emptyCart: "No items in cart.",
  alertTitle: "Select Payment Method",
  alertMessage: "Choose your payment method:",
  paymentOptions: ["Credit Card", "PayPal", "UPI", "Cancel"],
};

export const CART_TEXT = {
  heading: "Your Cart",
  emptyCart: "Your cart is empty",
  pricePrefix: "Price:",
  reviewedBy: "Reviewed by:",
  removeButton: "Remove",
  totalLabel: "Total:",
  checkoutButton: "Proceed to Checkout",
};

export const CONFIRMATION_TEXT = {
  heading: "✅ Order Confirmed!",
  message:
    "Thank you for your purchase. Your order has been placed successfully.",
  button: "Back to Home",
};

export const HOME_SCREEN_TEXT = {
  searchPlaceholder: "Search products...",
};

export const PRODUCT_DETAIL_TEXT = {
  quantity: "Quantity",
  reviews: "Reviews",
  viewCart: "View Cart",
};

export const SEARCH_SCREEN_TEXT = {
  noProductsFound: (query) => `No products found for "${query}"`,
};

export const CARD_TEXT = {
  increaseQuantity: "+",
  decreaseQuantity: "-",
  defaultTag: "Tag",
};
