import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { Text, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function Restaurant(props) {
  const {navigation} = props;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const id = navigation.getParam('id');
  console.log("::::::::::::>>>>>>>>>>>", id);
  useEffect(() => {
    fetchRestaurant()
  }, [])
  
  const fetchRestaurant = async () => {
    try {
      const {data} = await yelp.get(`/${id}`);
      setDetails(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {
        loading ? 
        <Text>loading...</Text>
        :
        <>
          <Text style={styles.name}>{details.name}</Text>
          <FlatList
            keyExtractor={item => item}
            data={details.photos}
            horizontal={true}
            renderItem={({item}) => <Image style={styles.images} source={{uri: item}} />}
          />
        </>
      }
    </>
  )
};

const styles = StyleSheet.create({
  images: {
    width: 250,
    height: 150,
    margin: 10
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10
  }
})

export default Restaurant;
