import React from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './SearchInputStyle';
const SearchInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search for products..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;
