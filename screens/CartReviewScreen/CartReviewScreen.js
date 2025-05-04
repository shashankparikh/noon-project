import React, { useMemo, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import List from "../../components/List/List";
import { styles } from "./CartReviewScreenStyle";

const CartItem = React.memo(({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>
      {item.title} × {item.quantity}
    </Text>
    <Text style={styles.itemText}>
      ${(item.price * item.quantity).toFixed(2)}
    </Text>
  </View>
));

const PaymentSection = React.memo(({ paymentMethod, onChangePayment }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Payment Method</Text>
    <TouchableOpacity onPress={onChangePayment}>
      <Text style={styles.paymentMethod}>{paymentMethod} (Change)</Text>
    </TouchableOpacity>
  </View>
));

const OrderSummary = React.memo(({ subtotal, tax, total }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Order Summary</Text>
    <View style={styles.summaryRow}>
      <Text>Subtotal</Text>
      <Text>${subtotal.toFixed(2)}</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text>Tax (10%)</Text>
      <Text>${tax.toFixed(2)}</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.totalLabel}>Total</Text>
      <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
    </View>
  </View>
));

const CartReviewScreen = ({ cartItems }) => {
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const tax = useMemo(() => subtotal * 0.1, [subtotal]);
  const total = useMemo(() => subtotal + tax, [subtotal, tax]);

  const handlePlaceOrder = useCallback(() => {
    navigation.navigate("ConfirmationScreen");
  }, [navigation]);

  const handleChangePayment = useCallback(() => {
    Alert.alert(
      "Select Payment Method",
      "Choose your payment method:",
      [
        { text: "Credit Card", onPress: () => setPaymentMethod("Credit Card") },
        { text: "PayPal", onPress: () => setPaymentMethod("PayPal") },
        { text: "UPI", onPress: () => setPaymentMethod("UPI") },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Summary</Text>
      <List
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items in cart.</Text>
        }
      />
      <PaymentSection
        paymentMethod={paymentMethod}
        onChangePayment={handleChangePayment}
      />
      <OrderSummary subtotal={subtotal} tax={tax} total={total} />
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartReviewScreen);
