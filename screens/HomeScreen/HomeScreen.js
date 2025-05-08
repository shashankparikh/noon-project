import React, { useState, useEffect, useCallback } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import Card from "../../components/Card/card";
import { BANNERS } from "../../constant";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import SkeletonShimmer from "../../components/Shimmer/SkeletonsScreen";
import List from "../../components/List/List";
import { SearchIcon } from "../../assets/icons/icons";
import { HOME_SCREEN_TEXT as TEXT } from "../../constant";
// Actions
import {
  getProductList,
  updateProductQuantity,
} from "../../action/getProductListAction";
//styles
import { styles } from "./HomeScreenStyle";

const HomeScreen = (props) => {
  const {
    getProductList,
    getProductListState,
    navigation,
    updateProductQuantity,
  } = props;
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const SearchButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.searchInput}>
      <View style={styles.searchIcon}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={TEXT.searchPlaceholder}
        placeholderTextColor="grey"
        onPress={onPress}
      />
    </TouchableOpacity>
  );

  const handleSearchPress = () => {
    navigation.navigate("SearchScreen");
  };

  const handleCardPress = useCallback(
    (product) => {
      navigation.navigate("ProductDetail", { product });
    },
    [navigation]
  );

  const handleQuantityChange = useCallback(
    (updatedProduct) => {
      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === updatedProduct.id
            ? { ...item, quantity: updatedProduct.quantity }
            : item
        )
      );
      updateProductQuantity(updatedProduct);
    },
    [updateProductQuantity]
  );

  const handleRefresh = () => {
    setRefreshing(true);
    getProductList(1);
    setPage(1);
    setTimeout(() => setRefreshing(false), 1000);
  };

  useEffect(() => {
    getProductList(page);
  }, [page]);

  // console.log(products, "products");

  // Api State for the Product List
  useEffect(() => {
    if (getProductListState.apiState === "success" && isFocused) {
      //   console.log(getProductListState.data, "getProductListState.data");
      setProducts([...getProductListState.data]);
      setLoading(false);
      setLoadingMore(false);
    } else if (getProductListState.apiState === "error") {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [getProductListState.apiState, getProductListState.data, isFocused]);

  // console.log(getProductListState, "getProductListState");

  if (loading) return <SkeletonShimmer screen={"home"} />;

  return (
    <>
      <SearchButton onPress={handleSearchPress} />
      <List
        data={products || []}
        keyExtractor={(item) => item.id.toString()}
        extraData={products.map((p) => p.quantity).join(",")}
        renderItem={({ item }) => (
          <Card
            product={item}
            onPress={handleCardPress}
            onQuantityChange={handleQuantityChange}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        onEndReached={() => {
          if (!loadingMore && products.length < 30) {
            setLoadingMore(true);
            setPage((prevPage) => prevPage + 1);
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator size="small" /> : null
        }
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={() => (
          <View>
            <ImageSlider images={BANNERS} />
          </View>
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  getProductListState: state.getProductList,
});

const mapDispatchToProps = (dispatch) => ({
  getProductList: (page) => dispatch(getProductList(page)),
  updateProductQuantity: (product) => dispatch(updateProductQuantity(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
