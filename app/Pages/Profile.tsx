import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/app/Shared/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function Profile() {
    const { isLoaded, isSignedIn, user } = useUser();
    const navigation = useNavigation();

    return isLoaded && (
        <View style={styles.container}>
    
            <View style={styles.header}>
                <Text style={styles.headerText}>Profile</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image 
                    source={{ uri: user?.imageUrl }} 
                    style={styles.profileImage} 
                />
                <View>
                    <Text style={styles.mainText}>{user?.fullName}</Text>
                    <View style={styles.rowStyle}>
                      <Image source={require('../Assets/Images/coin.png')} style={{width:35,height:35}}/>
                      <Text style={styles.mainText}>3751</Text>
                    </View>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton}>
                    <View style={styles.row}>
                        <Ionicons name='book-outline' size={35} color={Colors.primary}/>
                        <Text style={styles.optionText}>My Courses</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} /*onPress={()=>navigation.navigate('UpgradePlan')}*/>
                    <View style={styles.row}>
                      <Ionicons name='shield-checkmark-outline' size={35} color={Colors.primary}/>
                      <Text style={styles.optionText}>Upgrade Plan</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                    <View style={styles.row}>
                      <Ionicons name='stats-chart-outline' size={35} color={Colors.primary}/>
                      <Text style={styles.optionText}>Ranking</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <View style={styles.row}>
                      <Ionicons name='log-out-outline' size={35} color={Colors.primary}/>
                      <Text style={styles.optionText}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.primary, 
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileContainer: {
        backgroundColor: Colors.white,
        marginHorizontal: 20,
        marginTop: -50, //Profil kutusunu üst bölgede göstermek için
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5, //Gölge
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    mainText: {
        fontSize: 20,
        color: Colors.black,
    },
    optionsContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    optionButton: {
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5, 
    },
    optionText: {
        marginLeft:20,
        fontSize: 16,
        color: Colors.black,
        textAlign: 'left',
    },
    rowStyle:{
      display:'flex', 
      flexDirection:'row',
      gap:10,
      alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

});
