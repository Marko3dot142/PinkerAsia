import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const Password = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.header}>Create a Password</Text>
            <Text style={styles.subtitle}>Create a password consisting of at least 8 characters, including letters or numbers, and make sure it's not something others can predict.</Text>

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
                style={styles.input} 
                keyboardType="default"      // Enable full keyboard
                secureTextEntry={true}      // Adds password dots/asterisks
                autoCorrect={false}         // Disables autocorrect
                placeholder="Enter your password"
                placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.setPasswordButton}>
                <Text style={styles.buttonText}>Set as password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
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
    subtitle: {
        fontSize: 16,
        color: '#333',
    },
    inputLabel: {
        fontSize: 18,
        color: '#666',
        marginBottom: '2%',
        marginTop: '10%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: '4%',
        fontSize: 18,
        marginBottom: '15%',
    },
    setPasswordButton: {
        backgroundColor: '#ff69b4',
        padding: '4%',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: '8%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
})

export default Password;