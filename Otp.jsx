import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Otp = ({ route, navigation }) => {
    const { phoneNumber } = route.params;

    const verifyOtp = (otpValue) => {
        if (otpValue) {
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Enter OTP</Text>
            <Text style={styles.subtitle}>For verification, enter the 6-digit OTP we sent to your mobile number.</Text>

            <Text style={styles.inputLabel}>OTP</Text>
            <TextInput style={styles.input} placeholder='000000' keyboardType='number-pad' />

            <TouchableOpacity style={styles.otpSubmitButton} onPress={() => verifyOtp()}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resendOtp} onPress={() => {}}>
                <Text style={styles.buttonText}>Didn't receive OTP?</Text>
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
    otpSubmitButton: {
        backgroundColor: '#ff69b4',
        padding: '4%',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: '8%',
    },
    resendOtp: {
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
});

export default Otp;
