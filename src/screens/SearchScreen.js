import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { FlatList } from 'react-native-gesture-handler';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

function SearchScreen(props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, errorMessage, search] = useResults(setLoading);
  const filterByPrice = (price) => {
    return results.filter(r => r.price === price)
  }
  const categories = [
    {
      title: "Cost Effective",
      price: "$"
    },
    {
      title: "Bit Pricer",
      price: "$$"
    },
    {
      title: "Bit Spender!",
      price: "$$$"
    }
  ]
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} onTermSubmit={() => search(query)}/>
      {
        !loading && 
        <>
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <FlatList
            data={categories}
            style={styles.categoriesList}
            keyExtractor={item => item.title}
            renderItem={({item}) => <ResultsList title={item.title} results={filterByPrice(item.price)}/>}
          />
        </>
      }
    </>
  )
};

const styles = StyleSheet.create({
  categoriesList: {
    marginTop: 10
  },
  main: {
    flex: 1
  }
})

export default SearchScreen;
