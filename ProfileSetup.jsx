import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProfileSetup = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [customTag, setCustomTag] = useState('');

    const predefinedTags = [
        "Cafe Hopping", "Hiking", "Photography", "Food Explorer",
        "Travel", "Reading", "Gaming", "Fitness",
        "Art & Design", "Music", "Movies", "Technology",
        "Cooking", "Fashion", "Sports", "Dancing",
        "Yoga", "Writing", "Meditation", "Outdoor Activities"
    ];

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const addCustomTag = () => {
        if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
            setSelectedTags([...selectedTags, customTag.trim()]);
            setCustomTag('');
        }
    };

    const handleSetupProfile = () => {
        console.log('Profile Setup:', {
            selectedTags,
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Profile Setup</Text>
            <Text style={styles.subtitle}>Set up your profile to get started. Be attentive on this part to create an attractive profile.</Text>

            {/* Username Field */}
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#999"
            />

            {/* Age Field */}
            <Text style={styles.inputLabel}>Age</Text>
            <TextInput 
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter your age"
                placeholderTextColor="#999"
            />

            {/* Gender Field */}
            <Text style={styles.inputLabel}>Gender</Text>
            <View style={styles.genderContainer}>
                {['Male', 'Female', 'Other'].map((gender) => (
                    <TouchableOpacity 
                        key={gender} 
                        style={styles.genderButton}
                    >
                        <Text style={styles.genderText}>{gender}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Location Field */}
            <Text style={styles.inputLabel}>Location</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter your location"
                placeholderTextColor="#999"
            />

            {/* Interests Section */}
            <Text style={styles.inputLabel}>Interests & Activities</Text>
            <Text style={styles.subtitleSmall}>Select or create your own tags</Text>

            {/* Custom Tag Input */}
            <View style={styles.customTagContainer}>
                <TextInput 
                    style={styles.customTagInput}
                    value={customTag}
                    onChangeText={setCustomTag}
                    placeholder="Add custom interest"
                    placeholderTextColor="#999"
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={addCustomTag}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            {/* Tags Grid */}
            <View style={styles.tagsContainer}>
                {predefinedTags.map((tag) => (
                    <TouchableOpacity 
                        key={tag}
                        style={[
                            styles.tag,
                            selectedTags.includes(tag) && styles.tagSelected
                        ]}
                        onPress={() => toggleTag(tag)}
                    >
                        <Text style={[
                            styles.tagText,
                            selectedTags.includes(tag) && styles.tagTextSelected
                        ]}>
                            {tag}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Setup Profile Button */}
            <TouchableOpacity 
                style={styles.setupButton}
                onPress={handleSetupProfile}
            >
                <Text style={styles.setupButtonText}>Setup Profile</Text>
            </TouchableOpacity>
        </ScrollView>
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
        color: '#ff69b4',
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
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%',
    },
    genderButton: {
        flex: 1,
        padding: '4%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginHorizontal: '1%',
        alignItems: 'center',
    },
    genderText: {
        color: '#666',
        fontSize: 16,
    },
    subtitleSmall: {
        fontSize: 14,
        color: '#666',
        marginBottom: '3%',
    },
    customTagContainer: {
        flexDirection: 'row',
        marginBottom: '5%',
    },
    customTagInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: '4%',
        fontSize: 16,
        marginRight: '2%',
    },
    addButton: {
        backgroundColor: '#ff69b4',
        padding: '4%',
        borderRadius: 8,
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '10%',
    },
    tag: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: '3%',
        margin: '1%',
        backgroundColor: '#fff',
    },
    tagSelected: {
        backgroundColor: '#ff69b4',
        borderColor: '#ff69b4',
    },
    tagText: {
        color: '#666',
        fontSize: 14,
    },
    tagTextSelected: {
        color: '#fff',
    },
    setupButton: {
        backgroundColor: '#ff69b4',
        padding: '4%',
        borderRadius: 8,
        marginBottom: '10%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    setupButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default ProfileSetup;