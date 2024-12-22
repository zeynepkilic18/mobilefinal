import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UpgradePlan() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upgrade Plan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
