import React from 'react';
import { View, Text, Image } from 'react-native';
import Style from './ProductStyle';

export const Product = ({ title, price, image, inStock }) => (
    <View style={Style.item}>
      <Image source={{ uri: image }} style={Style.image} />
      <Text style={Style.title}>{title}</Text>
      <Text style={Style.price}>{price}</Text>
      {!inStock && <Text style={Style.outOfStock}>STOKTA YOK</Text>}
    </View>
  );

export default Product;
