import { View, Text,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '@/app/Shared/Colors';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function Header({points}:{points:number}) {
    const {isLoaded,isSignedIn,user}=useUser();
    
  return isLoaded&&(
    <View> 
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
      <View style={styles.rowStyle}>
        <Image source={{uri:user?.imageUrl}}
        style={{width:50,height:50, borderRadius:99}}/>
        <View>
            <Text style={{color:Colors.white,}}>Welcome,</Text>
            <Text style={styles.mainText}>{user?.fullName}</Text>
        </View>
        
      </View>
      <View style={styles.rowStyle}>
            <Image source={require('../../Assets/Images/coin.png')} style={{width:35,height:35}}/>
            <Text style={styles.mainText}>{points}</Text>
        </View>
    </View>
        <View style={{backgroundColor:Colors.white, paddingLeft:20,
             marginTop:25,paddingRight:5,borderRadius:99,display:'flex',
             flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput placeholder='Search Courses' style={{fontSize:18}}/>
            <Ionicons name='search-circle' size={50} color={Colors.primary}/>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    mainText:{
        color:Colors.white,
        fontSize:20,
    },
    rowStyle:{
        display:'flex', 
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
})