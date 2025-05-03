import React, { useRef, useEffect, useState } from "react";
import { View, FlatList, Image } from "react-native";
import { styles } from "./ImageSliderStyle";
const ImageSlider = ({ images, interval = 5000 }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);
  return (
    <View style={styles.ImageContainer}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.Image} />;
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
      />
    </View>
  );
};

export default ImageSlider;
