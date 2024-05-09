import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../comman/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const navigation = useNavigation();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setconfirmPassword] = useState('')
  const addUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email:email,
        mobile:mobile,
        password:password,
        confirmPassword:confirmPassword
        
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Login')
      });
  };
  return (
    <View style={styles.cointainer}>
      <Text style={styles.title}> SignUp</Text>
      <TextInput placeholder="Enter Name" style={styles.input} value={name} onChangeText={(text)=>setName(text)} />
      <TextInput placeholder="Enter Email" style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} />
      <TextInput placeholder="Enter Mobile Number" style={styles.input} value={mobile} onChangeText={(text)=>setMobile(text)} />
      <TextInput placeholder="Enter Password" style={styles.input} value={password} onChangeText={(text)=>setPassword(text)} />
      <TextInput placeholder="Confirm Password" style={styles.input} value={confirmPassword} onChangeText={(text)=>setconfirmPassword(text)} />
      <CustomButton
        bg={'#ccccff'}
        title={'Sign-Up'}
        color={'#000099'}
        onClick={() => {addUser()}}
      />
      <Text
        style={styles.loginTxt}
        onPress={() => navigation.navigate('Login')}>
        Login
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: '#000000',
    marginTop: 50,
    marginLeft: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    padding: 15,
    marginTop: 10,
  },
  loginTxt: {
    alignSelf: 'center',
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#000099',
  },
});
