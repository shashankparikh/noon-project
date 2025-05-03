import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import ProductDetailScreen from "../screens/ProductDetails/ProductDetailScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import CartReviewScreen from "../screens/CartReviewScreen/CartReviewScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen/ConfirmationScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={BottomTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ title: "Product Details" }}
    />
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{ title: "Search Product" }}
    />
    <Stack.Screen
      name="CartReviewScreen"
      component={CartReviewScreen}
      options={{ title: "Cart Review" }}
    />
    <Stack.Screen
      name="ConfirmationScreen"
      component={ConfirmationScreen}
      options={{ title: "Confirmation" }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
