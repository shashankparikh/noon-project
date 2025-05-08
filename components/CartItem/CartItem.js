import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CART_TEXT as TEXT } from "../../constant";
// import { useQuantity } from "../../hooks/useQuantity";
import { styles } from "./CartItemStyle";

const CartItem = ({ item, handleRemove, handleIncrease, handleDecrease }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        {item.reviews.length > 0 && (
          <Text style={styles.reviewerName}>
            {TEXT.reviewedBy} {item.reviews[0].reviewerName}
          </Text>
        )}
        <Text style={styles.itemPrice}>
          {TEXT.pricePrefix} ${item.price.toFixed(2)}
        </Text>
        <View style={styles.bottomCartWrapper}>
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
          <View>
            <TouchableOpacity
              onPress={() => handleRemove(item)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>{TEXT.removeButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(CartItem);
