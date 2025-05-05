export const BANNERS = [
  "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
  "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
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
