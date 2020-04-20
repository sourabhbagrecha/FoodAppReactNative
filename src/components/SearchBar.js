import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

function SearchBar(props) {
  const {query, setQuery, onTermSubmit} = props

  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={(value) => setQuery(value)}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#E0DDDD",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15
  },
  input: {
    fontSize: 18,
    marginVertical: "auto",
    flex: 1,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})

export default SearchBar;
