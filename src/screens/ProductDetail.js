import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../comman/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import CustomButton from '../comman/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../redux/slices/WishListSlice';
import {addItemToCart} from '../redux/slices/CartSlice';
import AsyncStorage from '@react-native-community/async-storage';
import AskForLoginModal from '../comman/AskForLoginModal';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty,setQty]  = useState(1)
  const [modalVisible, setModalVisible] = useState(false)
  // Call out
  const checkUserStatus =async()=>{
    let isUserLoggedIn = false
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN')
    if(status == null)
      {
        isUserLoggedIn = false
      }
      else{
        isUserLoggedIn = true
      }
      console.log(isUserLoggedIn)
      return isUserLoggedIn
  }

   return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        isCart={true}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Image source={{uri: route.params.data.image}} style={styles.banner} />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.description}>{route.params.data.description}</Text>
        <View style={styles.prcCoin}>
          <Text style={styles.pricename}>{'Price : '}</Text>
          <Text style={styles.pricenumber}>
            {'$' + route.params.data.price}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
                if(qty>1){
                    setQty(qty-1)
                }
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
           <Text style={styles.qtynum}>{qty}</Text> 
          <TouchableOpacity
            style={styles.btn}
            onPress={()=>{setQty(qty+1)}}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={styles.wishlstbtn}
          onPress={() => {
            if (checkUserStatus() === true){
              dispatch(addItemToCart({...route.params.data,qty:qty}));
            }
            else{
              setModalVisible(true)
            }
          }}>
          <Image source={require('../images/heartW.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.qtyview}>
          
        </View>
        <CustomButton
          bg={'#ccccff'}
          title={'Add to Cart'}
          color={'#000099'}
          onClick={() => {
            dispatch(addItemToCart({...route.params.data,qty:qty}));
            // for login use
            // if (checkUserStatus() === true){
            //   dispatch(addItemToCart({...route.params.data,qty:qty}));
            // }
            // else{
            //   setModalVisible(true)
            // }
            
           //complete json object(V3:37) 
          }}
        />
      </ScrollView>
      {/* for Login User */}
      {/* <AskForLoginModal 
        modalVisible={modalVisible}

        onClose={()=>{
          setModalVisible(false)
          
        }}

        onClickLogin={()=>{
          setModalVisible(false)
          navigation.navigate('Login')
        }}

        onClickSignUp={()=>{
          setModalVisible(false)
          navigation.navigate('SignUp')
        }}
      /> */}
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 15,
    marginRight: 5,
  },
  description: {
    fontSize: 14,
    color: '#9494b8',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 10,
  },
  pricenumber: {
    color: 'green',
    fontWeight: '600',
    // marginLeft:20,
    marginTop: 20,
    fontSize: 22,
    marginRight:10
  },
  pricename: {
    color: 'black',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 22,
  },
  prcCoin: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center'
  },
  wishlstbtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#ccccff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#000099',
  },
  qtyview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:5
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
