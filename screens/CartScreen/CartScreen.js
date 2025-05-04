import React, { useMemo, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons"; // or any other icon package
import { updateProductQuantity } from "../../action/getProductListAction";
import { removeProductFromCart } from "../../action/cartAction";
import List from "../../components/List/List";
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
      if (item.quantity > 1) {
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
      <Text style={styles.heading}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <FontAwesome name={"shopping-cart"} size={40} color="#000000" />
        </View>
      ) : (
        <>
          <List
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.itemImage}
                />
                <View style={styles.infoContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  {item.reviews.length > 0 && (
                    <Text style={styles.reviewerName}>
                      Reviewed by: {item.reviews[0].reviewerName}
                    </Text>
                  )}
                  <Text style={styles.itemPrice}>
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => handleDecrease(item)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => handleIncrease(item)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleRemove(item)}
                    style={styles.removeButton}
                  >
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 150 }}
          />

          <View style={styles.bottomContainer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate("CartReviewScreen")}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
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
