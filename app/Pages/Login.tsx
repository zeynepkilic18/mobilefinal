import 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import '../Shared/Colors'
import Color from '../Shared/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Shared/Colors';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useWarmUpBrowser } from '@/hooks/warmUpBrowser';
import { ClerkProvider, SignedIn, SignedOut,useAuth,useOAuth } from '@clerk/clerk-expo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import '../Navigations/TabNavigation'
import { RootTabParamList } from '../src/types/navigation';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  //const navigation = useNavigation<NavigationProp<RootTabParamList>>();
   useWarmUpBrowser();
   const {startOAuthFlow} = useOAuth({strategy: "oauth_google"});

   const onPress = React.useCallback(async() =>  {
    try {
      const { createdSessionId,signIn,signUp,setActive} =await startOAuthFlow();
      if(createdSessionId){
        setActive({session: createdSessionId});
        //navigation.navigate('home');
      } else {
        
      }
    } catch(err) {
      console.error("OAuth error",err);
    }
   }, [startOAuthFlow]);

  return (
    <View>
      <Image source={require('././../Assets/Images/login.png')} style={styles.image}/>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text style={{textAlign:'center',marginTop:80,fontSize:20}}>Login/Signup</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
            <Text style={{color:Colors.white}}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    image: {
        width:Dimensions.get("window").width,
        height:230,
    },
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold',
    },
    button:{
        backgroundColor:Color.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    }
})