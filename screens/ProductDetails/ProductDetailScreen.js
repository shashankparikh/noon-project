import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // or any other icon package
import { connect } from "react-redux";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { useQuantity } from "../../hooks/useQuantity";
import { updateProductQuantity } from "../../action/getProductListAction";
import { PRODUCT_DETAIL_TEXT as TEXT } from "../../constant";
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
  // const [quantity, setQuantity] = useState(product.quantity);

  const { quantity, increase, decrease } = useQuantity(
    product,
    updateProductQuantity
  );

  const totalCartQuantity = cartItems.reduce((acc, val) => {
    return val.quantity + acc;
  }, 0);

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

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        {product?.images && (
          <View>
            <ImageSlider images={product.images} />
          </View>
        )}
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.ratingWrapper}>
          <FontAwesome name="star" size={18} color="#5BAF39" />
          <Text style={styles.rating}> {product.rating}</Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.sectionTitle}>{TEXT.quantity}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => decrease()}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => increase()}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>{TEXT.reviews}</Text>
        {product.reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Tabs", { screen: "Cart" })}
      >
        <FontAwesome name={"shopping-cart"} size={20} color="#FFFFFF" />
        <Text style={styles.cartButtonText}>
          {TEXT.viewCart} ({totalCartQuantity})
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
