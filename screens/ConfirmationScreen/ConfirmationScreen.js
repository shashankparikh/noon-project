import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { styles } from "./ConfirmationStyle";
import { clearCart } from "../../action/cartAction";
import { getProductListReset } from "../../action/getProductListAction";

const ConfirmationScreen = ({ navigation, clearCart, getProductListReset }) => {
  const handleBackHome = () => {
    clearCart();
    getProductListReset();
    navigation.navigate("Tabs", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>✅ Order Confirmed!</Text>
      <Text style={styles.message}>
        Thank you for your purchase. Your order has been placed successfully.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleBackHome}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  getProductListReset: () => dispatch(getProductListReset()),
});

export default connect(null, mapDispatchToProps)(ConfirmationScreen);
