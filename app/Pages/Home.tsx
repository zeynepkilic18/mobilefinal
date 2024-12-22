import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import Colors from '../Shared/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import BasicCourses from '../Courses/BasicCourses'
import ProjectVideoCourses from '../Courses/ProjectVideoCourses'
import AdvanceCourses from '../Courses/AdvanceCourses'


export default function Home() {
  
  return (
    <View>
      <ScrollView>
      <View style={{backgroundColor:Colors.primary,height:250,padding:20}}>
          <Header/>
          <Text style={{marginTop:40,fontSize:24, fontWeight:'bold',color:Colors.white}}>Basic Courses</Text>
       </View>
       <BasicCourses/>
       <Text style={{marginLeft:20,marginTop:40,fontSize:24, fontWeight:'bold',color:Colors.black}}>Advance Courses</Text>
       <AdvanceCourses/>
       <Text style={{marginLeft:20,marginTop:40,fontSize:24, fontWeight:'bold',color:Colors.black}}>Project & Video Courses</Text>
       <ProjectVideoCourses/>
    </ScrollView>
    </View>
  )
}

