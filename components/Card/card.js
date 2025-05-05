import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { tagColors } from "../../constant";
import CardConfig from "./cardConfig";
import { CARD_TEXT as TEXT } from "../../constant";
import { styles } from "./cardStyle";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Card = ({ product, onPress, onQuantityChange, config = CardConfig }) => {
  const {
    showPrice,
    showRating,
    showDescription,
    showQuantityControls,
    showImage,
    titleMaxLines,
    descriptionMaxLines,
  } = config;

  const increase = () => {
    const newQuantity = (product.quantity || 0) + 1;
    onQuantityChange?.({ ...product, quantity: newQuantity });
  };

  const decrease = () => {
    const newQuantity = Math.max((product.quantity || 0) - 1, 0);
    onQuantityChange?.({ ...product, quantity: newQuantity });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {product?.salesTag && (
        <View style={styles.saleTag}>
          <Text style={styles.saleTagText}>{product.salesTag}</Text>
        </View>
      )}
      {showImage && (
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
      )}
      {showRating && (
        <View style={styles.ratingWrapper}>
          <FontAwesome name="star" size={18} color="#5BAF39" />
          <Text style={styles.rating}> {product.rating}</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={titleMaxLines}>
          {product.title}
        </Text>
        {showPrice && <Text style={styles.price}>${product.price}</Text>}
        <View style={styles.tagsContainer}>
          <View
            style={[
              styles.tag,
              {
                backgroundColor:
                  tagColors[product?.tags?.[0]] || tagColors.default,
              },
            ]}
          >
            <Text style={styles.tagText}>
              {product?.tags?.[0] || TEXT.defaultTag}
            </Text>
          </View>
        </View>

        {showDescription && (
          <Text style={styles.description} numberOfLines={descriptionMaxLines}>
            {product.description}
          </Text>
        )}

        {showQuantityControls && (
          <View style={styles.buttonRow}>
            <View style={styles.quantityBox}>
              <TouchableOpacity onPress={decrease} style={styles.qtyButton}>
                <Text style={styles.qtyButtonText}>
                  {TEXT.decreaseQuantity}
                </Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{product.quantity || 0}</Text>
              <TouchableOpacity onPress={increase} style={styles.qtyButton}>
                <Text style={styles.qtyButtonText}>
                  {TEXT.increaseQuantity}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Card);
