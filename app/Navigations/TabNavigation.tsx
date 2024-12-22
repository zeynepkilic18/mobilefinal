import { View, Text, Settings } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Pages/Home';
import MyCourse from '../Pages/MyCourse';
import LeaderBoard from '../Pages/LeaderBoard';
import Profile from '../Pages/Profile';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={
        {
            headerShown:false
        }
    }>
        <Tab.Screen name='Home' component={Home}
        options={{tabBarIcon:({color,size})=>(
            <Ionicons name='home-outline' size={size} color={color}/>
        )}}
        />
        <Tab.Screen name='My Course' component={MyCourse}
        options={{tabBarIcon:({color,size})=>(
            <Ionicons name='book-outline' size={size} color={color}/>
        )}}
        />
        <Tab.Screen name='Leader Board' component={LeaderBoard}
        options={{tabBarIcon:({color,size})=>(
            <Ionicons name='stats-chart-outline' size={size} color={color}/>
        )}}
        />
        <Tab.Screen name='Profile' component={Profile}
        options={{tabBarIcon:({color,size})=>(
            <Ionicons name='person-outline' size={size} color={color}/>
        )}}
        />
    </Tab.Navigator>
  )
}