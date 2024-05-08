import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({bg,title,onClick,color}) => {
  return (
    <TouchableOpacity
     style={[styles.btn,{backgroundColor:bg}]}
     activeOpacity={1}
     onPress={()=>{onClick()}}
     >
        <Text style={[styles.titletxt,{color:color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        width:Dimensions.get('window').width-40,
        height:50,
        marginBottom:100,
        alignSelf:'center',
        borderRadius:10,
        marginTop:5
    },
    titletxt:{
        alignSelf:'center',
        fontSize:24,
        fontWeight:'600',
        marginTop:7
    }
})