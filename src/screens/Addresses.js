import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../comman/Header'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'


const Addresses = () => {
    const navigation =useNavigation()
    const addressList = useSelector(state=>state.address)
    const isFocused = useIsFocused()
    

    useEffect(()=>{console.log(addressList)},[isFocused])

    const defaultAddress=async item=>{
        await AsyncStorage.setItem(
            'MY_ADDRESS',
            ''+
            item.city +
            ','+
            item.state +
            ','+
            item.pincode +
            ',type:'+
            item.type
        )
        navigation.goBack()
    }
  return (
    <View style={styles.cointainer}>
      <Header title={'Addresses'} 
        leftIcon={require('../images/back.png')}
        onClickLeftIcon={()=>{navigation.goBack()}}
      />
      < FlatList
        data={addressList.data}
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity 
                onPress={()=>defaultAddress(item)}
                style={styles.addressList}
                >
                    <Text  style={styles.addresstxt}>{`State : ${item.state}`}</Text>
                    <Text  style={styles.addresstxt}>{`City : ${item.city}`}</Text>
                    <Text  style={styles.addresstxt}>{`PinCode: ${item.pincode}`}</Text>
                    <Text  style={[styles.addresstxt,styles.type]}>{item.type}</Text>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.bottomIcon}>
                            <Image source={require('../images/edit.png')} style={[styles.icon,{tintColor:'#8c1aff'}]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomIcon}>
                            <Image source={require('../images/delete.png')} style={[styles.icon,{marginLeft:10}]}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        }}
      />
      <TouchableOpacity style={styles.addbtn} onPress={()=>{navigation.navigate('AddAdress')}}>
        <Text style={{fontSize:30,color:'#0000b3'}}>+</Text>
      </TouchableOpacity>

    </View>
  )
}

export
 default Addresses

const styles = StyleSheet.create({
    cointainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    addbtn:{
        width:50,
        height:50,
        backgroundColor:'#ccccff',
        borderRadius:25,
        position:'absolute',
        bottom:50,
        right:20,
        justifyContent:'center',
        alignItems:'center'

    },
    addressList:{
        width:"90%",
        backgroundColor:'#fff',
        borderWidth:0.5,
        alignSelf:'center',
        marginTop:20,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:20

    },
    addresstxt:{
        color:'#000000',
        fontSize:18,
    },
    type:{
        position:'absolute',
        right:10,
        top:10,backgroundColor:'#c6d9ec',
        paddingHorizontal:5,
        borderRadius:10,
        borderWidth:0.3
    },
    bottomView:{
        position:'absolute',
        right:10,
        bottom:10,
        flexDirection:'row'
    },
    bottomIcon:{
        width:24,
        height:24,

    },
    icon:{
        width:20,
        height:20
    }
})