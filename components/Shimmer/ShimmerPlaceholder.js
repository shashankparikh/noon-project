import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

const ShimmerPlaceholder = ({ style }) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [shimmerAnim]);

  const backgroundColor = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e0e0e0", "#f5f5f5"],
  });

  return (
    <Animated.View style={[styles.shimmerBox, { backgroundColor }, style]} />
  );
};

const styles = StyleSheet.create({
  shimmerBox: {
    borderRadius: 10,
    margin: 8,
  },
});

export default ShimmerPlaceholder;
