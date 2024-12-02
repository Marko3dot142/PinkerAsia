import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [isPhoneMode, setIsPhoneMode] = useState(true);
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>

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
        style={styles.loginButton}
        onPress={() => {
          // Add onPress handler for sign up functionality
          // You can add your signup logic here
        }}
      >
        <Text style={styles.loginButtonText}>Log in</Text>
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

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Registration')}
          activeOpacity={0.7}
        >
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotAccount}>
        <Text style={styles.forgotText}>Forgot account?</Text>
      </TouchableOpacity>
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
  loginButton: {
    backgroundColor: '#ff69b4',
    padding: '4%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: '8%',
  },
  loginButtonText: {
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#666',
    fontSize: 16,
  },
  signupLink: {
    color: '#ff69b4',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotAccount: {
    padding: 5,
  },
  forgotText: {
    color: '#ff69b4',
    fontSize: 16,
    textAlign: 'center'
  },
});

export default LoginScreen;