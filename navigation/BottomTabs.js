import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CartScreen from "../screens/CartScreen/CartScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce((acc, val) => {
    return val.quantity + acc;
  }, 0);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Cart") {
            iconName = "cart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff9900",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: totalQuantity > 0 ? totalQuantity : null,
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(BottomTabs);
