import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

const GreetingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Pinker</Text>
        <Text style={styles.subtitle}>Make new friends,{'\n'}make social ecosystem better.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.buttonText}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
  },
  header: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: Math.min(width * 0.08, 40),
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: height * 0.02,
  },
  subtitle: {
    fontSize: Math.min(width * 0.045, 24),
    textAlign: 'center',
    color: '#666',
    lineHeight: Math.min(width * 0.06, 30),
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#ff69b4',
    width: '100%',
    padding: height * 0.02,
    borderRadius: Math.min(width * 0.05, 25),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: Math.min(width * 0.04, 20),
    fontWeight: '600',
  },
});

export default GreetingScreen;