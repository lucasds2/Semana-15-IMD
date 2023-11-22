import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const GalleryApp = () => {
  
  const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/200/200?random=${randomId}`;
  };

  
  const imageList = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    origin: 'internet',
    url: getRandomImageUrl(),
  }));

  const renderImage = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={renderImage}
        numColumns={2} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageContainer: {
    margin: 5,
    width: 150, 
    height: 150, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default GalleryApp;
