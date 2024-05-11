import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../comman/Header'
import CustomButton from '../comman/CustomButton'
import { useDispatch } from 'react-redux'
import { addAdress } from '../redux/slices/AddressSlice'


const AddAdress = () => {
    const navigation =useNavigation()
    const [type,setType] = useState(0)
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const dispatch =useDispatch()

    return (
      <View style={styles.cointainer}>
        <Header title={'Add New Address'} 
          leftIcon={require('../images/back.png')}
          onClickLeftIcon={()=>{navigation.goBack()}}
        />
        <TextInput
        style={[styles.input,{marginTop:50}]}
        placeholder='Enter State'
        value = {state}
        onChangeText={(text)=>setState(text)}
        />
        <TextInput
        style={[styles.input,{marginTop:15}]}
        placeholder='Enter City'
        value = {city}
        onChangeText={(text)=>setCity(text)}
        />
        <TextInput
        style={[styles.input,{marginTop:15}]}
        placeholder='Enter Pin-Code'
        keyboardType={'number-pad'}
        value = {pincode}
        onChangeText={(text)=>setPincode(text)}
        />
        <View style={styles.typeView}>
            <TouchableOpacity style={[styles.typeBtn,{borderWidth:1},{borderColor:type==0?'#0000ff':'#000000'}]} onPress={()=>setType(0)}>
                <Image source={
                    type == 0?require('../images/sele.png'):require('../images/nonsele.png')
                }  
                style={[styles.icon,{tintColor:type==0?'#0000ff':'#000000'}]}/>
                <Text style={[styles.radiotxt,{color:type==0?'#0000ff':'#000000'}]}>{'Home'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.typeBtn,{borderWidth:1},{borderColor:type==1?'#0000ff':'#000000'}]} onPress={()=>setType(1)}>
                <Image source={
                    type == 1?require('../images/sele.png'):require('../images/nonsele.png')
                }  
                style={[styles.icon,{tintColor:type==1?'#0000ff':'#000000'}]}/>
                <Text style={[styles.radiotxt,{color:type==1?'#0000ff':'#000000'}]}>{'Office'}</Text>
            </TouchableOpacity>
        </View>
        <CustomButton 
            bg={'#ccccff'}
            title={'Save Address'}
            color={'#0000b3'}
            onClick={()=>{
                dispatch(addAdress({
                    state:state,
                    city:city,
                    pincode:pincode,
                    type:type==0?'Home':'office'
                })
            )
            navigation.goBack()
            }}
        />
    </View>
    )
}


export default AddAdress

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
    input:{
        width:'90%',
        height:'50',
        borderRadius:10,
        borderWidth:0.3,
        alignSelf:'center',
        paddingLeft:20

    },
    typeView:{
        width:'100%',
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    typeBtn:{
        width:'40%',
        height:50,
        borderRadius:20,
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center',
        marginBottom:20
    },
    icon:{
        height:24,
        width:24
    },
    radiotxt:{
        marginLeft:10,
        fontSize:20,
    }
})