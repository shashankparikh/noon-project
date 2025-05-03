import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // or any other icon package
import { connect } from "react-redux";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { updateProductQuantity } from "../../action/getProductListAction";

import { styles } from "./ProductDetailStyle";

const ReviewItem = React.memo(({ review }) => (
  <View style={styles.reviewContainer}>
    <View style={styles.reviewHeader}>
      <Text style={styles.reviewerName}>{review.reviewerName}</Text>
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, i) => (
          <FontAwesome
            key={i}
            name={i < review.rating ? "star" : "star-o"}
            size={18}
            color="#ff9900"
          />
        ))}
        <Text style={styles.reviewRating}> ({review.rating})</Text>
      </View>
    </View>
    <Text style={styles.reviewComment}>{review.comment}</Text>
    <Text style={styles.reviewDate}>
      {new Date(review.date).toLocaleDateString()}
    </Text>
  </View>
));

const ProductDetailScreen = ({
  route,
  updateProductQuantity,
  navigation,
  cartItems,
}) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(product.quantity);

  const totalCartQuantity = cartItems.length;

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity((prev) => prev + 1);
    updateProductQuantity({ ...product, quantity: newQuantity });
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity((prev) => prev - 1);
      updateProductQuantity({ ...product, quantity: newQuantity });
    }
  };

  const handleQuantityChange = useCallback(
    (change) => {
      const newQuantity = Math.max(0, quantity + change);
      setQuantity(newQuantity);
      updateProductQuantity({ ...product, quantity: newQuantity });
    },
    [quantity, updateProductQuantity, product]
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Image source={{ uri: product.thumbnail }} style={styles.image} /> */}
        {product?.images && (
          <View>
            <ImageSlider images={product.images} />
          </View>
        )}
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>⭐ {product.rating}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.sectionTitle}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => handleQuantityChange(-1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => handleQuantityChange(1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity> */}
        </View>

        <Text style={styles.sectionTitle}>Reviews</Text>
        {product.reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Tabs", { screen: "Cart" })}
      >
        <Text style={styles.cartButtonText}>
          🛒 View Cart ({totalCartQuantity})
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductQuantity: (product) => dispatch(updateProductQuantity(product)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);
