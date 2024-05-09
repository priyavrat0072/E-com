import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../comman/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser=()=>{
    firestore()
  .collection('Users')
  // Filter results
  .where('email', '==', email)
  .get()
  .then(querySnapshot => {
    /* ... */
    console.log(querySnapshot.docs[0]._data)
  });
  }

  return (
    <View style={styles.cointainer}>
      <Text style={styles.title}> Login</Text>
      <TextInput placeholder="Enter Email" style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
      <TextInput placeholder="Enter Password" style={styles.input} value={password} onChangeText={(text)=>setPassword(text)} />
      <CustomButton
        bg={'#ccccff'}
        title={'Login'}
        color={'#000099'}
        onClick={() => {loginUser()}}
      />
      <Text
        style={styles.loginTxt}
        onPress={() => navigation.navigate('SignUp')}>
        Sign-Up
      </Text>
    </View>
  );
};

export default Login;

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
