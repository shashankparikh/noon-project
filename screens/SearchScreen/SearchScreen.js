import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/Card/card"; // adjust path as needed
import SearchInput from "../../components/SearchInput/SearchInput";
import List from "../../components/List/List";
import { SEARCH_SCREEN_TEXT as TEXT } from "../../constant";
import SkeletonShimmer from "../../components/Shimmer/SkeletonsScreen";

// actions
import { updateProductQuantity } from "../../action/getProductListAction";
// styles
import { styles } from "./SearchScreenStyle";

const SearchScreen = (props) => {
  const { getProductList, updateProductQuantity } = props;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const navigation = useNavigation();

  const handleQuantityChange = useCallback(
    (updatedProduct) => {
      setResults((prevProducts) =>
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

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const delayDebounce = setTimeout(() => {
      const filtered = getProductList.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      if (filtered.length > 0 && !recentSearches.includes(query)) {
        setRecentSearches((prev) =>
          [query, ...prev.filter((q) => q !== query)].slice(0, 5)
        );
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [query, recentSearches, getProductList]);

  const handleCardPress = useCallback(
    (product) => {
      navigation.navigate("ProductDetail", { product });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <SearchInput value={query} onChangeText={setQuery} />

      {query.length === 0 && recentSearches.length > 0 && (
        <View style={styles.recentContainer}>
          <ScrollView style={{ flex: 1 }}>
            {recentSearches.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setQuery(item)}
                style={styles.recentItem}
              >
                <Text style={styles.recentText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      {loading ? (
        //   <ActivityIndicator size="large" style={styles.loader} />
        <SkeletonShimmer screen={"search"} />
      ) : results.length > 0 ? (
        <List
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              product={item}
              onPress={handleCardPress}
              onQuantityChange={handleQuantityChange}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : !loading && query.length > 0 && results.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{TEXT.noProductsFound(query)}</Text>
        </View>
      ) : null}
    </View>
  );
};
const mapStateToProps = (state) => ({
  getProductList: state.getProductList.data,
});
const mapDispatchToProps = (dispatch) => ({
  updateProductQuantity: (product) => dispatch(updateProductQuantity(product)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
