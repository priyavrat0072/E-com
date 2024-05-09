import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'


const AskForLoginModal = ({modalVisible,onClickLogin,onClickSignUp,onClose}) => {
  return (
    <Modal  visible={modalVisible} transparent>
        <View style={styles.modalView}>
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.btn} onPress={()=>{onClickLogin()}}>
                    <Text style={styles.btntxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.btn,{marginBottom:20}]} onPress={()=>{onClickSignUp()}}>
                <Text style={styles.btntxt}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clsbtn} onPress={()=>{onClose()}}>
                    <Image source={require('../images/close.png')}  style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default AskForLoginModal

const styles = StyleSheet.create({
    modalView:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        position:'absolute',
        top:0,
        backgroundColor:'rgba(0,0,0,0.7)',
        justifyContent:'center',
        alignItems:'center'
    },
    mainView:{
        backgroundColor:'white',
        borderRadius:10,
        width:'80%'
    },
    btn:{
        width:'80%',
        height:50,
        alignSelf:'center',
        backgroundColor:'#ccccff',
        marginTop:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    btntxt:{
        color:'#000099',
        fontSize:20
    },
    clsbtn:{
        position:'absolute',
        top:10,
        right:10
    },
    icon:{
        width:20,
        height:20
    }
})