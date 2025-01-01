import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import Colors from '../Shared/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'


export default function ProjectVideoCourses({increasePoints}: {increasePoints:(amount:number)=>void}) {
  
  return (
    <View >
       
        <View>
          <Slider/>
          <View style={styles.imageContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.imageWrapper}>
                <View style={styles.cardContainer}>
                  <Image source={require('././../Assets/Images/projectcourses2.png')} style={styles.image}/>
                  <View style={styles.infoContainer}>
                    <Text style={styles.courseTitle}>Build LMS App</Text>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                        <Ionicons name='book-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>24 Chapters</Text>
                      </View>
                      <View style={styles.rowRight}>
                        <Ionicons name='time-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>3h:00min</Text>
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                      <Text style={{ fontSize:20,color: Colors.primary }}>Free</Text>
                      </View>
                    </View>

                    <View style={{marginTop:10}}>
                      <TouchableOpacity style={styles.buttonStyle} onPress={() => increasePoints(10)}>
                        <Text style={styles.buttonText} >Add to my List</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </View>

              <View style={styles.imageWrapper}>
                <View style={styles.cardContainer}>
                  <Image source={require('././../Assets/Images/projectcourses.png')} style={styles.image}/>
                  <View style={styles.infoContainer}>
                    <Text style={styles.courseTitle}>Build LMS App</Text>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                        <Ionicons name='book-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>18 Chapters</Text>
                      </View>
                      <View style={styles.rowRight}>
                        <Ionicons name='time-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>4h:15min</Text>
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                      <Text style={{ fontSize:20,color: Colors.primary }}>$2.99</Text>
                      </View>
                    </View>

                    <View style={{marginTop:10}}>
                      <TouchableOpacity style={styles.buttonStyle} onPress={() => increasePoints(10)}>
                        <Text style={styles.buttonText} >Add to my List</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </View>
              
              
            </ScrollView>
          </View>
          <View style={{marginTop:40}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    marginRight:15,
  },
  cardContainer: {
    width: 270, 
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ddd'
  },
  infoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  coursePrice: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    width:'100%',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  chapterText: {
    marginLeft: 5,
    fontSize: 12,
    color: Colors.black,
  },
  freeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  },
    buttonStyle: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      },
});
