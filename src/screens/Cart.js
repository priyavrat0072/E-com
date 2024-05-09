import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../comman/Header';
import { FlatList } from 'react-native';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../redux/slices/CartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch()
//   console.log('hello');
//   console.log(JSON.stringify(items) + ' ' + items.data.length);
    useEffect(()=>{
        setCartItems(items.data)
    },[items])
  const navigation = useNavigation();
  return (
    <View style={styles.cointainer}>
      <Header title={'Cart Items'}
        
      />
      <FlatList
        data={cartItems}
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
                <View style={styles.qtyview}>
                <Text style={styles.price}>{'$' + item.price}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    if(item.qty > 1){
                        dispatch(reduceItemFromCart(item))
                    }else{
                        dispatch(removeItemFromCart(index))
                    }
                }}>
                <Text style={{fontSize:18,fontWeight:'600'}}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtynum}>{item.qty}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    dispatch(addItemToCart(item))
                }}>
                <Text style={{fontSize:18,fontWeight:'600'}}>+</Text>
                </TouchableOpacity>
                </View>
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
    marginRight:10
  },
  qtyview:{

    flexDirection:'row'
  },
  btn:{
    alignItems:'center',
    padding:5,
    justifyContent:'center',
    borderWidth:0.5,
    width:30,
    borderRadius:10,
    marginLeft:5,
    marginTop:5
  },
  qtynum:{
    margin:7,
    alignItems:'center',
    justifyContent:'center',
    fontSize:18
  }
});
