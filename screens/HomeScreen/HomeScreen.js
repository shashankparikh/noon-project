import React, { useState, useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import {
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useIsFocused } from "@react-navigation/native";
import Card from "../../components/Card/card";
import { BANNERS } from "../../constant";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import SkeletonShimmer from "../../components/Shimmer/SkeletonsScreen";
// Actions
import {
  getProductList,
  getProductListReset,
  updateProductQuantity,
} from "../../action/getProductListAction";
//styles
import { styles } from "./HomeScreenStyle";

const HomeScreen = (props) => {
  const {
    getProductList,
    getProductListReset,
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
      <View style={{ paddingHorizontal: 6, marginRight: 8 }}>
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M20.075 11.264a8.56 8.56 0 01-8.561 8.56 8.56 8.56 0 01-8.561-8.56 8.56 8.56 0 018.56-8.561c3.13 0 5.869 1.68 7.362 4.187M18.726 19.886a1.411 1.411 0 111.41 1.411"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Search products..."
        placeholderTextColor="grey"
        onPress={onPress}
      />
    </TouchableOpacity>
  );

  const handleSearchPress = () => {
    navigation.navigate("SearchScreen");
  };

  const handleCardPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const handleQuantityChange = (updatedProduct) => {
    // const upData = [...products];
    // const updatedProducts = upData.map((item) =>
    //   item.id === updatedProduct.id ? { ...updatedProduct } : item
    // );
    // setProducts(updatedProducts);
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === updatedProduct.id
          ? { ...item, quantity: updatedProduct.quantity }
          : item
      )
    );
    updateProductQuantity(updatedProduct);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getProductList(1);
    setPage(1);
    setTimeout(() => setRefreshing(false), 1000);
  };

  useEffect(() => {
    getProductList(page);
  }, [page]);

  console.log(products, "products");

  // Api State for the Product List
  useEffect(() => {
    if (getProductListState.apiState === "success" && isFocused) {
      console.log(getProductListState.data, "getProductListState.data");
      setProducts([...getProductListState.data]);
      setLoading(false);
      setLoadingMore(false);
    } else if (getProductListState.apiState === "error") {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [getProductListState.apiState, getProductListState.data, isFocused]);

  console.log(getProductListState, "getProductListState");

  if (loading)
    //  return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
    return <SkeletonShimmer />;

  return (
    <SafeAreaView>
      <SearchButton onPress={handleSearchPress} />
      <FlatList
        data={products || []}
        keyExtractor={(item) => item.id.toString()}
        extraData={products.map((p) => p.quantity).join(",")}
        //  extraData={products.map((p) => p.quantity).join(",")}
        //  keyExtractor={(item) => `${item.id}-${item.quantity}`}
        renderItem={({ item }) => (
          <Card
            product={item}
            onPress={() => handleCardPress(item)}
            onQuantityChange={(updatedProduct) =>
              handleQuantityChange(updatedProduct)
            }
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
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  getProductListState: state.getProductList,
});

const mapDispatchToProps = (dispatch) => ({
  getProductList: (page) => dispatch(getProductList(page)),
  getProductListReset: () => dispatch(getProductListReset()),
  updateProductQuantity: (product) => dispatch(updateProductQuantity(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
