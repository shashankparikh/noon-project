import React from "react";
import { View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SearchIcon } from "../../assets/icons/icons";
import { styles } from "./SearchInputStyle";
const SearchInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.searchIcon}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Search for products..."
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="grey"
      />
    </View>
  );
};

export default SearchInput;
