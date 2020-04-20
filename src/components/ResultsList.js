import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ResultBox from './ResultBox';
import { withNavigation } from 'react-navigation';

function ResultsList(props) {
  const {title, results} = props
  
  return (
    results.length !== 0 && 
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item, i)=> item.name+i}
        renderItem={({item}) => <ResultBox {...item}/>}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700"
  },
})

export default ResultsList;
