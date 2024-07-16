import React from 'react';
import { Text, FlatList, SafeAreaView, TextInput } from 'react-native';
import styles from './AppStyle';
import Product from './components/Product'; 

import data from './data.json';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>STORE</Text>
      <TextInput style={styles.searchBox} placeholder="Ara..." />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Product
            title={item.title}
            price={item.price}
            image={item.imgURL}
            inStock={item.inStock}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default App;
