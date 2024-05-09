import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../comman/Header'


const User = () => {
  return (
    <View style={styles.cointainer}>
      <Header title={'Profile'}/>
      <Image source={require('../../images/UserPro.png')}  style={styles.User}/>
      <Text style={styles.name}>Bittu</Text>
      <Text style={[styles.name,{fontSize:16,marginTop:0, fontWeight:'400'}]}>Bittu@gmail.com</Text>
      <TouchableOpacity style={[styles.tab,{marginTop:40}]}>
          <Text style={styles.txt}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
          <Text style={styles.txt}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
          <Text style={styles.txt}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
          <Text style={styles.txt}>Payment Method</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
          <Text style={styles.txt}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  cointainer:{
    flex:1,
    backgroundColor:'#fff'
  },
  User:{
    height:100,
    width:100,
    alignSelf:'center',
    marginTop:50
  },
  name:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'600',
    color:'#000'
  },
  tab:{
    width:'90%',
    height:50,
    borderBottomWidth:0.3,
    alignSelf:'center',
    borderBottomColor:'#d1e0e0',
    paddingLeft:20,
    justifyContent:'center'
  },
  txt:{
    color:'#000'
  }
})