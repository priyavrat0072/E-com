import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../../comman/Header';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Search = () => {
  const navigation = useNavigation()
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data)
  const [searchedList,setSearchedList] = useState([])
  const filterData=(text)=>{
    let newData = oldData.filter(item=>{
      return item.title.toLowerCase().match(text.toLowerCase())
    })
    setSearchedList(newData)
    // console.log('hello')
    // console.log(newData)
  }
  // console.log('Hello')
  // console.log(JSON.stringify(products.product.data))



  return (
    <View style={styles.cointainer}>
      <Header title={'Search Items'} 
      />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../images/searchB.png')}
            style={styles.icon}
          />
          <TextInput
            value={search}
            onChangeText={text => {
              setSearch(text)
              filterData(text)
            }}
            placeholder="Search Items Here...."
            style={styles.input}></TextInput>
        </View>
        {
        search !== '' ? (
          <TouchableOpacity onPress={()=>{
            setSearch('')
            setSearchedList([])

            }}>
            <Image
              source={require('../../images/close.png')}
              style={[styles.icon, {height: 16, width: 16, marginTop: 15}]}
              
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList 
        data={searchedList}
        renderItem={({item,index})=>{
          return(
            <TouchableOpacity
               activeOpacity={1} 
               style={styles.productItem}
               onPress={()=>{navigation.navigate('ProductDetail',{data:item})}}
               >
                <Image source={{uri:item.image}}  style={styles.itemImage}/>
                <View>
                <Text style={styles.name}>{item.title.length>30
                  ? item.title.substring(0,30)+'...'
                  : item.title
                      }
                </Text>

                <Text style={styles.dsc}>{item.description.length>30
                  ? item.description.substring(0,30)+'...'
                  : item.description
                      }
                </Text>
                <Text style={styles.price}>{'$'+item.price}
                </Text>

                </View>
              </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    // paddingTop:12
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
    // marginTop:12
  },
  input: {
    width: '80%',
    marginLeft: 10,
  },
  productItem:{
    width:Dimensions.get('window').width,
    height:100,
    marginTop:10,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    alignItems:'center'

  },
  itemImage:{
    width:100,
    height:100
  },
  name:{
    fontSize:18,
    fontWeight:'600',
    marginLeft:20,

  },
  dsc:{
    marginLeft:20,
    color:'black'
  },
  price:{
    marginLeft:20,
    color:'green',
    fontSize:18,
    fontWeight:'600',
    marginTop:5
  }
});
