import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../comman/Header';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Wishlist from './tabs/Wishlist';
import Notification from './tabs/Notification';
import User from './tabs/User';

const HomeScreen = () => {

    const[selectedTab,setSelectedTab] = useState(0)

  return (
    <>
      

        {
            selectedTab==0?(<Home/>):
            selectedTab==1?(<Search/>):
            selectedTab==2?(<Wishlist/>):
            selectedTab==3?(<Notification/>):
            (<User/>)
        }

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectedTab(0)}>
          <Image
            source={selectedTab==0?require('../images/homeB.png'):require('../images/homeW.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectedTab(1)}>
          <Image
            source={selectedTab==1?require('../images/searchB.png'):require('../images/searchW.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectedTab(2)}>
          <Image
            source={selectedTab==2?require('../images/heartB.png'):require('../images/heartW.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectedTab(3)}>
          <Image
            source={selectedTab==3?require('../images/bellB.png'):require('../images/bellW.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>setSelectedTab(4)}>
          <Image
            source={selectedTab==4?require('../images/userB.png'):require('../images/userW.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 30,
    height: 30,
  },
});
