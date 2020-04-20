import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ResultBox(props) {
  const {id, name, image_url, rating, review_count, navigation} = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {id} )}>
      <View style={styles.box}>
        <Image
          style={styles.poster}
          source={{ uri: image_url }}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.reviews}>
            <Text style={styles.reviewsStar}>{rating} Stars</Text>
            <Text style={styles.reviewsCount}>{review_count} Reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  box: {
    margin: 10,
    width: 250,
    borderRadius: 10
  },
  details: {
    padding: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  reviews: {
    flexDirection: 'row'
  },
  reviewsCount: {
    color: "gray"
  },
  reviewsStar: {
    color: "gray",
    marginRight: 10
  },
  poster: {
    width: 250,
    height: 150
  }
})

export default withNavigation(ResultBox);
