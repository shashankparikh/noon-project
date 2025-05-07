import React, { useMemo, useCallback } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons"; // or any other icon package
import { updateProductQuantity } from "../../action/getProductListAction";
import { removeProductFromCart } from "../../action/cartAction";
import List from "../../components/List/List";
import { CART_TEXT as TEXT } from "../../constant";
import CartItem from "../../components/CartItem/CartItem";
import { styles } from "./CartScreenStyle";

const CartScreen = ({
  cartItems,
  updateProductQuantity,
  removeProductFromCart,
  navigation,
}) => {
  const handleIncrease = useCallback(
    (item) => {
      const updatedItem = { ...item, quantity: item.quantity + 1 };
      updateProductQuantity(updatedItem);
    },
    [updateProductQuantity]
  );

  const handleDecrease = useCallback(
    (item) => {
      if (item.quantity > 0) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        updateProductQuantity(updatedItem);
      }
    },
    [updateProductQuantity]
  );

  const handleRemove = useCallback(
    (item) => {
      const updatedItem = { ...item, quantity: 0 };
      updateProductQuantity(updatedItem);
      removeProductFromCart(item.id);
    },
    [updateProductQuantity, removeProductFromCart]
  );

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{TEXT.heading}</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>{TEXT.emptyCart}</Text>
          <FontAwesome name={"shopping-cart"} size={40} color="#000000" />
        </View>
      ) : (
        <>
          <List
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                updateProductQuantity={updateProductQuantity}
                handleRemove={handleRemove}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            )}
            contentContainerStyle={{ paddingBottom: 150 }}
          />

          <View style={styles.bottomContainer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>{TEXT.totalLabel}</Text>
              <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate("CartReviewScreen")}
            >
              <Text style={styles.checkoutButtonText}>
                {TEXT.checkoutButton}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductQuantity: (product) => dispatch(updateProductQuantity(product)),
  removeProductFromCart: (id) => dispatch(removeProductFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
