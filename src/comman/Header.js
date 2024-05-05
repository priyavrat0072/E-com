import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get('window')

const Header = (
    {
        title,
        rightIcon,
        leftIcon,
        onClickRightIcon,
        onClickLeftIcon
    }
) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={()=>onClickLeftIcon()}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn} >
        <Image source={rightIcon} style={styles.icon} />
      </TouchableOpacity>
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
    }
})