import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../Pages/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import Home from '../Pages/Home';
import { ClerkProvider, SignedIn, SignedOut,useOAuth } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '../Navigations/TabNavigation';
import UpgradePlan from '../Pages/UpgradePlan';

//Projenin başlatılması

export default function App() {

  const [userData,setUserData]=useState<any>(null);
  

  return (
    <ClerkProvider publishableKey='pk_test_c3VwZXJiLW1pZGdlLTkxLmNsZXJrLmFjY291bnRzLmRldiQ'>
    <GestureHandlerRootView style ={styles.container}>
      
     
     <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
     </SignedIn>
     <SignedOut>
          <Login/>
     </SignedOut>
    </GestureHandlerRootView>
    </ClerkProvider>
  );
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    marginTop:20,
  }
})