import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';


const LeaderBoard = () => {
 
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'weekly', title: 'Weekly' },
    { key: 'allTime', title: 'All Time' },
  ]);

  type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];
  const getRankColor = (index: number) => {
    switch (index) {
      case 0:
        return 'gold';
      case 1:
        return 'silver';
      case 2:
        return '#d89e91';
      default:
        return 'white';
    }
  }

  const getPersonImage = (index: number) => {
    switch (index) {
      case 0:
        return require('../Assets/Images/person3.jpeg');
      case 1:
        return require('../Assets/Images/person1.jpeg');
      case 2:
        return require('../Assets/Images/person4.jpeg');
      default:
        return require('../Assets/Images/person2.jpeg');
    }
  }
  

  // Haftalık ve genel liste kişileri
  const weeklyData: { name: string; score: number; icon: IoniconsName }[] = [
    { name: 'Alice', score: 1200, icon: 'trophy' },
    { name: 'Bob', score: 1100, icon: 'trophy' },
    { name: 'Charlie', score: 1050, icon: 'trophy' },
    { name: 'David', score: 980, icon: 'trophy' },
  ];

  const allTimeData: { name: string; score: number; icon: IoniconsName }[] = [
    { icon: 'trophy',name: 'Eve', score: 3000 },
    { icon: 'trophy',name: 'Frank', score: 2900 },
    { icon: 'trophy',name: 'Grace', score: 2700 },
    { icon: 'trophy',name: 'Hank', score: 2500 },
  ];

  // Haftalık liste
  const WeeklyRoute = () => (
    <ScrollView style={styles.listContainer}>
      {weeklyData.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Image
          source={getPersonImage(index)}
          style={styles.imageStyle} // Stil ekleyin
        />
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.scoreText}>{item.score} pts</Text>
          <Ionicons
          name={item.icon}
          size={24}
          color={getRankColor(index)} // Renk sıralamaya göre değişiyor
        />
        </View>
      ))}
    </ScrollView>
  );

  // Genel liste
  const AllTimeRoute = () => (
    <ScrollView style={styles.listContainer}>
      {allTimeData.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Image
          source={getPersonImage(index)}
          style={styles.imageStyle} // Stil ekleyin
        />
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.scoreText}>{item.score} pts</Text>
          <Ionicons
          name={item.icon}
          size={24}
          color={getRankColor(index)} // Renk sıralamaya göre değişiyor
        />
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          
            <Ionicons name="arrow-back" size={24} color={Colors.white} />
          <Text style={styles.headerText}>Leader Board</Text>
        </View>

        <View style={styles.tabBarContainer}>
          {routes.map((route, i) => (
            <Text
              key={i}
              style={[
                styles.tabBarText,
                index === i ? styles.tabBarTextActive : null,
              ]}
              onPress={() => setIndex(i)}
            >
              {route.title}
            </Text>
          ))}
        </View>
      </View>

      {index === 0 ? <WeeklyRoute /> : <AllTimeRoute />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingTop: 40, 
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginLeft: 15, 
  },
  headerText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    marginBottom: 10,
    backgroundColor: Colors.white, 
    borderRadius: 30,
    paddingHorizontal: 50,
  },
  listItemText: {
    fontSize: 16,
    color: Colors.black,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    backgroundColor: Colors.light_primary,
    borderRadius: 30,
    paddingVertical: 10,
    width: '80%',
    marginLeft: 40,
  },
  tabBarText: {
    fontSize: 16,
    color: Colors.white,
  },
  tabBarTextActive: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25, // Yuvarlak yapmak için
    marginRight: 10, // Metinle arası boşluk
    borderWidth:1,
    borderColor:Colors.light_primary,
  },
  nameText: {
    fontSize: 16, 
    color: Colors.black,
  },
  scoreText: {
    fontSize: 14,
    color: Colors.gray, 
  },
  flagStyle: {
    width: 20,
    height: 15,
    position: 'absolute',
    bottom: 2, 
    right: 2, 
    borderWidth: 1,
    borderColor: Colors.white, 
    borderRadius: 3, 
  },
});

export default LeaderBoard;
