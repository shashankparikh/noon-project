import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import ShimmerPlaceholder from "./ShimmerPlaceholder";

const { width } = Dimensions.get("window");

const SkeletonShimmer = ({ screen }) => {
  const dummyArray = Array(6).fill("");

  const renderItem = () => (
    <ShimmerPlaceholder
      style={{
        width: width / 2 - 24,
        height: 200,
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dummyArray}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={() =>
          screen === "home" ? (
            <FlatList
              data={Array(3).fill("")}
              horizontal
              keyExtractor={(_, index) => `banner-${index}`}
              renderItem={() => (
                <ShimmerPlaceholder
                  style={{
                    width: width - 32,
                    height: 180,
                    borderRadius: 10,
                    marginHorizontal: 8,
                    marginBottom: 10,
                  }}
                />
              )}
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: 10 }}
            />
          ) : null
        }
      />
    </View>
  );
};

export default SkeletonShimmer;
