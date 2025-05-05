import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { styles } from "./ConfirmationStyle";
import { clearCart } from "../../action/cartAction";
import { getProductListReset } from "../../action/getProductListAction";
import { CONFIRMATION_TEXT as TEXT } from "../../constant";

const ConfirmationScreen = ({ navigation, clearCart, getProductListReset }) => {
  const handleBackHome = () => {
    clearCart();
    getProductListReset();
    navigation.navigate("Tabs", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{TEXT.heading}</Text>
      <Text style={styles.message}>{TEXT.message}</Text>
      <TouchableOpacity style={styles.button} onPress={handleBackHome}>
        <Text style={styles.buttonText}>{TEXT.button}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  getProductListReset: () => dispatch(getProductListReset()),
});

export default connect(null, mapDispatchToProps)(ConfirmationScreen);
