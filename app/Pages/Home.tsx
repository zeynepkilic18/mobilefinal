import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import Colors from '../Shared/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import BasicCourses from '../Courses/BasicCourses'
import ProjectVideoCourses from '../Courses/ProjectVideoCourses'
import AdvanceCourses from '../Courses/AdvanceCourses'


export default function Home() {
  
  const [points,setPoints]= useState(210);
  const increasePoints = (amount: number)=> {
    setPoints((prevPoints)=>prevPoints +amount)
  }

  return (
    <View>
      <ScrollView>
      <View style={{backgroundColor:Colors.primary,height:250,padding:20}}>
          <Header points={points}/>
          <Text style={{marginTop:40,fontSize:24, fontWeight:'bold',color:Colors.white}}>Basic Courses</Text>
       </View>
       <BasicCourses increasePoints={increasePoints}/>
       <Text style={{marginLeft:20,marginTop:40,fontSize:24, fontWeight:'bold',color:Colors.black}}>Advance Courses</Text>
       <AdvanceCourses increasePoints={increasePoints}/>
       <Text style={{marginLeft:20,marginTop:40,fontSize:24, fontWeight:'bold',color:Colors.black}}>Project & Video Courses</Text>
       <ProjectVideoCourses increasePoints={increasePoints}/>
    </ScrollView>
    </View>
  )
}

