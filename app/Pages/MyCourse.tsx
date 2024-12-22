import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Colors from '../Shared/Colors';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import Slider from '../Components/HomeScreen/Slider';


export default function UpgradePlan() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  return isLoaded && (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Courses</Text>
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: user?.imageUrl }} 
            style={styles.profileImage} 
          />
          <Text style={styles.mainText}>{user?.fullName}</Text>
        </View>
      </View>
      <View >
             
      
              <View>
                <Slider/>
                <View style={styles.imageContainer}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.imageWrapper}>
                      <View style={styles.cardContainer}>
                        <Image source={require('./../Assets/Images/html.png')} style={styles.image}/>
                        <View style={styles.infoContainer}>
                          <Text style={styles.courseTitle}>Learn Basic HTML</Text>
      
                          <View style={styles.row}>
                            <View style={styles.rowLeft}>
                              <Ionicons name='book-outline' size={20} color={Colors.black}/>
                              <Text style={styles.chapterText}>15 Chapters</Text>
                            </View>
                            <View style={styles.rowRight}>
                              <Ionicons name='time-outline' size={20} color={Colors.black}/>
                              <Text style={styles.chapterText}>2h:30min</Text>
                            </View>
                          </View>
      
                          <View style={styles.row}>
                            <View style={styles.rowLeft}>
                            <Text style={{ fontSize:20,color: Colors.primary }}>Continue</Text>
                            </View>
                            <View style={styles.rowRight}>
                              <Ionicons name='logo-html5' size={20} color={Colors.orange}/>
                            </View>
                          </View>
      
                        </View>
                      </View>
                    </View>
      
                    <View style={styles.imageWrapper}>
                      <View style={styles.cardContainer}>
                        <Image source={require('./../Assets/Images/html2.png')} style={styles.image}/>
                        <View style={styles.infoContainer}>
                          <Text style={styles.courseTitle}>Learn Basic HTML</Text>
      
                          <View style={styles.row}>
                            <View style={styles.rowLeft}>
                              <Ionicons name='book-outline' size={20} color={Colors.black}/>
                              <Text style={styles.chapterText}>15 Chapters</Text>
                            </View>
                            <View style={styles.rowRight}>
                              <Ionicons name='time-outline' size={20} color={Colors.black}/>
                              <Text style={styles.chapterText}>2h:30min</Text>
                            </View>
                          </View>
      
                          <View style={styles.row}>
                            <View style={styles.rowLeft}>
                            <Text style={{ fontSize:20,color: Colors.primary }}>Continue</Text>
                            </View>
                            <View style={styles.rowRight}>
                              <Ionicons name='logo-html5' size={20} color={Colors.orange}/>
                            </View>
                          </View>
      
                        </View>
                      </View>
                    </View>
                    
                    
                  </ScrollView>
                </View>
              </View>
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white, // Arka plan rengini ayarladım
  },
  imageContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    marginRight:15,
  },
  header: {
    backgroundColor: Colors.primary, 
    height: 200,
    width: '100%', // Header'ın genişliği tam ekran genişliği kadar göstermek için
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    marginTop: 0, 
  },
  headerText: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1, 
  },
  profileContainer: {
    alignItems: 'flex-end', 
  },
  mainText: {
    fontSize: 15,
    color: Colors.white,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10,
  },
  cardContainer: {
    width: 250, 
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    
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
      image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#ddd'
      },
});
