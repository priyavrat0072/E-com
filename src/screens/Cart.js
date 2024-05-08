import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../comman/Header';
import { FlatList } from 'react-native';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const items = useSelector(state => state.wishList);
  const [wishListItems, setWishListItems] = useState(items.data);
  console.log('hello');
  console.log(JSON.stringify(items) + ' ' + items.data.length);
  const navigation = useNavigation();
  return (
    <View style={styles.cointainer}>
      <Header title={'Cart Items'} />
      <FlatList
        data={wishListItems}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productItem}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.name}>
                  {item.title.length > 30
                    ? item.title.substring(0, 30) + '...'
                    : item.title}
                </Text>

                <Text style={styles.dsc}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>
                <Text style={styles.price}>{'$' + item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  dsc: {
    marginLeft: 20,
    color: 'black',
  },
  price: {
    marginLeft: 20,
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },
});
