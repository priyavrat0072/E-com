import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../comman/Header'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Header
          leftIcon={require('../../images/menu.png')}
          rightIcon={require('../../images/cart.png')}
          title={'Grocery App'}
          onClickLeftIcon={()=>navigation.openDrawer()}
          
        />
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    }

})