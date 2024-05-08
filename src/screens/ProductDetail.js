import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../comman/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import CustomButton from '../comman/CustomButton'
import { useDispatch } from 'react-redux'
import { addItemToWishList } from '../redux/slices/WishListSlice'
import { addItemToCart } from '../redux/slices/CartSlice'

const ProductDetail = () => {
    
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
  
  return (
    <View style={styles.container}>
      <Header 
      leftIcon={require('../images/back.png')}
      rightIcon={require('../images/cart.png')}
      title={'Product Detail'}
      onClickLeftIcon={()=>{navigation.goBack()}}
      />
        <ScrollView>
        <Image source={{uri:route.params.data.image}} style={styles.banner}/>
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.description}>{route.params.data.description}</Text>
        <View style={styles.prcCoin}>
        <Text style={styles.pricename}>{'Price : '}</Text>
        <Text style={styles.pricenumber}>{'$'+route.params.data.price}</Text>
        </View>
        <TouchableOpacity style={styles.wishlstbtn} onPress={()=>{dispatch(addItemToWishList(route.params.data))}}>
            <Image source={require('../images/heartW.png')}  style={styles.icon}/>
        </TouchableOpacity>
        <CustomButton 
        bg={'#ccccff'} 
        title={'Add to Cart'} 
        color={'#000099'} 
        onClick={()=>{dispatch(addItemToCart(route.params.data))}}
        />
        </ScrollView>
        
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    banner:{
        width:'100%',
        height:300,
        resizeMode:'center'
    },
    title:{
        fontSize:22,
        color:'#000',
        fontWeight:'600',
        marginLeft:20,
        marginTop:15,
        marginRight:5
    },
    description:{
        fontSize:14,
        color:'#9494b8',
        fontWeight:'400',
        marginLeft:20,
        marginTop:10,
        marginRight:10
    },
    pricenumber:{
        color:'green',
        fontWeight:'600',
        // marginLeft:20,
        marginTop:20,
        fontSize:22
    },
    pricename:{
        color:'black',
        fontWeight:'600',
        marginLeft:20,
        marginTop:20,
        fontSize:22
    },
    prcCoin:{
        flex:1,
        flexDirection:'row'
    },
    wishlstbtn:{
        position:'absolute',
        right:20,top:100,
        backgroundColor:'#ccccff',
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25
    },
    icon:{
        width:25,
        height:25,
        tintColor:'#000099'
        
    }   
})