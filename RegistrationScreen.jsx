import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const RegistrationScreen = ({ navigation }) => {
  const [isPhoneMode, setIsPhoneMode] = useState(true);
  const [input, setInput] = useState('');

  const handleRegistration = () => {
    // After successful registration form validation
    // You might want to store user data in a state or context
    const phoneNumber = '1234567890'; // Get this from your form

    // Navigate to OTP screen, passing necessary data
    navigation.navigate('Otp', {
      phoneNumber: phoneNumber,
      // Add any other data you need to pass
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up</Text>

      <Text style={styles.label}>
        {isPhoneMode ? "Mobile Number" : "Email"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={isPhoneMode ? "+00 000000000" : "email@example.com"}
        value={input}
        onChangeText={setInput}
        keyboardType={isPhoneMode ? "phone-pad" : "email-address"}
        autoCapitalize="none"
      />

      <TouchableOpacity 
        style={styles.switchMode}
        onPress={() => setIsPhoneMode(!isPhoneMode)}
      >
        <Text style={styles.switchText}>
          {isPhoneMode ? "Use email instead" : "Use phone number instead"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.signUpButton}
        onPress={handleRegistration}
      >
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.orLine} />
      </View>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="mail" size={24} color="#DB4437" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="instagram" size={24} color="#E4405F" />
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already a user? </Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}
        >
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '8%',
    paddingTop: '15%',
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: '10%',
    color: '#333',
  },
  label: {
    fontSize: 18,
    color: '#666',
    marginBottom: '2%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: '4%',
    fontSize: 18,
    marginBottom: '4%',
  },
  switchMode: {
    marginBottom: '8%',
  },
  switchText: {
    color: '#ff69b4',
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#ff69b4',
    padding: '4%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: '8%',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8%',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    color: '#666',
    paddingHorizontal: '5%',
    fontSize: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: '8%',
  },
  socialButton: {
    padding: '4%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width: 50,
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#666',
    fontSize: 16,
  },
  loginLink: {
    color: '#ff69b4',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegistrationScreen;