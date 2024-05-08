import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const {height,width} = Dimensions.get('window')

const Header = (
    {
        title,
        rightIcon,
        leftIcon,
        onClickRightIcon,
        onClickLeftIcon,
        isCart 
    }
) => {
  const cartItems = useSelector(state=>state.cart)
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={()=>onClickLeftIcon()}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {!isCart&&<View></View>}
      {
        isCart?(
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Cart')}>
        <Image source={rightIcon} style={styles.icon} />
        <View style={styles.miniIcon}>
        <Text style={styles.miniIconTxt}>{cartItems.data.length}</Text>
        </View>
      </TouchableOpacity>
        ):null
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        
        height:65,
        width:width,
        backgroundColor:'#5dabf5',
        flexDirection:'row',
        justifyContent:'space-between'
       
    },
    btn:{
        marginTop:10,
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:30,
        height:30,
        tintColor:'white',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
    },
    title:{
        marginTop:10,
        color:'white',
        fontSize:27
    },
    miniIcon:{
      width:20,
      height:20,
      borderRadius:10,
      backgroundColor:"#fff",
      position:'absolute',
      right:0,
      top:0,
      justifyContent:'center',
      alignItems:'center',
      
    },
    miniIconTxt:{
      color:'#000'
    }
})