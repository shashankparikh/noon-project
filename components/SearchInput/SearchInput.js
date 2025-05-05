import React from "react";
import { View, TextInput } from "react-native";
import { SearchIcon } from "../../assets/icons/icons";
import { HOME_SCREEN_TEXT as TEXT } from "../../constant";
import { styles } from "./SearchInputStyle";
const SearchInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.searchIcon}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={TEXT.searchPlaceholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="grey"
      />
    </View>
  );
};

export default SearchInput;
