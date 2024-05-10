import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CheckoutLayout = ({total,items}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.cointainer}>
      <View style={styles.tab}>
        <Text style={{color:'#000000',fontSize:14}}>{`(Items : ${items} )`}</Text>
        <Text style={{color:'#000000', fontWeight:'600', fontSize:16}}>{'Total Amount $:' + total}</Text>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity style={styles.CheckoutLayout} onPress={()=>{navigation.navigate('Checkout')}}>
                <Text style={{color:'#000000'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutLayout;

const styles = StyleSheet.create({
  cointainer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    color: '#000',
    flexDirection: 'row',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckoutLayout: {
    width:'80%',
    height:'50%',
    backgroundColor:'#ccccff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
});
