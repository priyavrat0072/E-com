import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../comman/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';
import {Dimensions} from 'react-native';
import CustomButton from '../comman/CustomButton';
import AsyncStorage from '@react-native-community/async-storage';

const Checkout = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState(0)
  const [selectedAddress, setSelectedAddress] = useState('Please Select Adress')
  const isFocused = useIsFocused()
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(2);
  };

  useEffect(()=>{
    getSelectedAddress();
  },[isFocused])

  const getSelectedAddress=async()=>{
    setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'))
  }

  return (
    <View style={styles.cointainer}>
      <Header
        leftIcon={require('../images/back.png')}
        title={'Checkout'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>Added Item</Text>
      <View>
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
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(reduceItemFromCart(item));
                        } else {
                          dispatch(removeItemFromCart(index));
                        }
                      }}>
                      <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtynum}>{item.qty}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        dispatch(addItemToCart(item));
                      }}>
                      <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.totalView}>
        <Text style={styles.title}>Total :</Text>
        <Text style={styles.title}>{'$ ' + getTotal()}</Text>
      </View>
      <Text style={styles.title}>Select Payment Mode</Text>
      <TouchableOpacity style={styles.paymentMethod} onPress={()=>setSelectedMethod(0)}>
          <Image 
          source={
             selectedMethod == 0?
            require('../images/sele.png'):
            require('../images/nonsele.png')
            } 
            style={[styles.icon,{tintColor : selectedMethod==0?'#0000ff':'#000000'}]} />
          <Text style={styles.paymentMethodtxt}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentMethod} onPress={()=>setSelectedMethod(1)}>
          <Image source={
            selectedMethod == 1?
            require('../images/sele.png'):
            require('../images/nonsele.png')
          } style={[styles.icon,{tintColor : selectedMethod==1?'#0000ff':'#000000'}]} />
          <Text style={styles.paymentMethodtxt}>Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentMethod} onPress={()=>setSelectedMethod(2)}>
          <Image source={
            selectedMethod == 2?
            require('../images/sele.png'):
            require('../images/nonsele.png')
          } style={[styles.icon,{tintColor : selectedMethod==2?'#0000ff':'#000000'}]} /> 
          <Text style={styles.paymentMethodtxt}>UPI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentMethod} onPress={()=>setSelectedMethod(3)}>
          <Image source={
            selectedMethod == 3?
            require('../images/sele.png'):
            require('../images/nonsele.png')
          } style={[styles.icon,{tintColor : selectedMethod==3?'#0000ff':'#000000'}]} />
          <Text style={styles.paymentMethodtxt}>Cash on delivery</Text>
      </TouchableOpacity>
      <View style={styles.addressView}>
      <Text style={styles.title}>Address</Text>
      <Text style={[styles.title,{textDecorationLine:'underline',color:'#6699ff',fontSize:14}]}
      onPress={()=>{navigation.navigate('Addresses')}}
      >Edit Address</Text>
      
      </View>
      <Text style={[styles.title,{marginTop:10,fontSize:16,color:'#666699',marginBottom:20,paddingLeft:10,}]}>{selectedAddress}</Text>
      
      <CustomButton 
        bg={'#009900'}
        title={'Pay & Order'}
        color={'#fff'}
      />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 30,
    color: '#000',
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
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
    marginRight: 10,
  },
  qtyview: {
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
    borderWidth: 0.5,
    width: 30,
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 5,
  },
  qtynum: {
    margin: 7,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  noItem: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 0.3,
    alignItems: 'center',
    borderBottomColor: '#d1e0e0',
  },
  paymentMethod:{
    flexDirection:'row',
    width:'90%',
    marginTop:20
  },
  icon:{
    width:24,
    height:24,
    marginLeft:20
  },
  paymentMethodtxt:{
    marginLeft:20,
    fontSize:16,
    color:'#000000'
  },
  addressView:{
    flex:1,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10
  }
});
