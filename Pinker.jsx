import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Pinker = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [activeTab, setActiveTab] = useState('discover');
  const [showMenu, setShowMenu] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [activeView, setActiveView] = useState('upcoming');
  const [description, setDescription] = useState("I love hiking and exploring cafes.");
  const [interests, setInterests] = useState(["Hiking", "Gym", "Café Explore"]);
  const [messages] = useState([
    {
      id: 1,
      sender: { name: "Sarah Lee", image: "https://via.placeholder.com/50" },
      content: "Hey! Are we still on for the hike?",
      timestamp: "2024-01-20T10:30:00Z",
      unread: true,
    },
  ]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [sortButtonWidth, setSortButtonWidth] = useState(Dimensions.get('window').width * 0.4);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const hosts = [
    {
      id: 1,
      name: "Sarah Lee",
      age: 25,
      location: "Kuala Lumpur",
      interests: ["Movies", "Travel", "Food"],
      rating: 4.8,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "John Doe",
      age: 30,
      location: "Singapore",
      interests: ["Business", "Semiotics", "Game-theory"],
      rating: 4.5,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Md Abdul",
      age: 28,
      location: "Cheras",
      interests: ["Travel", "Food", "Cricket"],
      rating: 4.5,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Davis",
      age: 22,
      location: "Seremban",
      interests: ["Vlogging", "Writing", "Travel"],
      rating: 4.7,
      image: "https://via.placeholder.com/150"
    }
  ];

  const moments = [
    {
      id: 1,
      userId: 1,
      userName: "Sarah Lee",
      userImage: "https://via.placeholder.com/150",
      type: "post",
      content: "Had an amazing cafe-hopping experience with @JohnDoe today! Check out these amazing desserts 📸",
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
      likes: 24,
      comments: 5,
      timestamp: "2024-01-20T10:30:00Z"
    },
    {
      id: 2,
      userId: 2,
      userName: "John Doe",
      userImage: "https://via.placeholder.com/150",
      type: "post",
      content: "Exploring the beautiful beaches of Bali! 🌴🌊",
      images: ["https://via.placeholder.com/150"],
      likes: 42,
      comments: 8,
      timestamp: "2024-01-21T14:00:00Z"
    },
  ];

  const filteredHosts = hosts.filter(host => 
    host.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
    setShowSortOptions(false); // Close sort options if open
  };

  const handleSortPress = () => {
    setShowSortOptions(!showSortOptions);
    setShowMenu(false); // Close menu if open
  };

  const handleSortOptionSelect = (option) => {
    setSortBy(option);
    setShowSortOptions(false); // Hide options after selection
  };

  const handleOutsidePress = () => {
    setShowMenu(false);
    setShowSortOptions(false);
  };

  const toggleSavePost = (postId) => {
    setSavedPosts((prevSavedPosts) =>
      prevSavedPosts.includes(postId)
        ? prevSavedPosts.filter((id) => id !== postId)
        : [...prevSavedPosts, postId]
    );
  };

  const renderMomentContent = (moment) => {
    const isSaved = savedPosts.includes(moment.id);

    return (
      <View style={styles.singlePostContainer}>
        <View style={styles.postHeader}>
          <Image source={{ uri: moment.userImage }} style={styles.profileImage} />
          <Text style={styles.username}>{moment.userName}</Text>
          <TouchableOpacity onPress={() => toggleSavePost(moment.id)} style={styles.saveButton}>
            <Feather name="bookmark" size={24} color={isSaved ? "#ff69b4" : "#666"} />
          </TouchableOpacity>
        </View>
        <Text style={styles.postContent}>{moment.content}</Text>
        <ScrollView horizontal>
          {moment.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.postImage} />
          ))}
        </ScrollView>
        <View style={styles.postStats}>
          <Text style={styles.statsText}>
            {moment.likes} likes • {moment.comments} comments
          </Text>
        </View>
        <View style={styles.postFooter}>
          <TouchableOpacity style={styles.centeredText}>
            <Text>👍 Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centeredText}>
            <Text>💬 Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchQuery('');
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.pinkerContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>
            {activeTab === 'discover' ? 'Pinker' : 
             activeTab === 'explore' ? 'Explore' : 
             activeTab === 'inbox' ? 'Inbox' : 
             activeTab === 'schedule' ? 'My Schedule' : 'My Profile'}
          </Text>
        </View>

        {/* Sort Controls - Only show on homepage/discover tab */}
        {activeTab === 'discover' && (
          <View style={[styles.sortControls, { position: 'relative' }]}>
            <View style={{ position: 'relative' }}>
              <TouchableOpacity
                style={[styles.sortButton, { width: sortButtonWidth }]}
                onPress={handleSortPress}
              >
                <Text style={styles.sortButtonText}>
                  Sort by: {sortBy === 'popularity' ? 'Popularity' : 'A-Z'}
                </Text>
              </TouchableOpacity>

              {/* Sort Options Popup */}
              {showSortOptions && (
                <View style={[styles.sortOptions, { width: sortButtonWidth }]}>
                  <TouchableOpacity 
                    style={styles.menuItem} 
                    onPress={() => handleSortOptionSelect('popularity')}
                  >
                    <Text style={styles.menuText}>Popularity</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.menuItem} 
                    onPress={() => handleSortOptionSelect('alphabetical')}
                  >
                    <Text style={styles.menuText}>A-Z</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* Replaced second sort button with search bar */}
            <View style={{ position: 'relative', width: sortButtonWidth }}>
              <View style={styles.searchInputContainer}>
                <Feather 
                  name="search" 
                  size={20} 
                  color="#666" 
                  style={styles.searchIcon}
                />
                <TextInput 
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="#666"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
            </View>
          </View>
        )}

        {/* Menu Popup */}
        {showMenu && (
          <View style={styles.menuPopup}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Feedback</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Main Content */}
        <ScrollView style={styles.content}>
          {activeTab === 'discover' && (
            <View style={styles.hostGrid}>
              {filteredHosts.map(host => (
                <TouchableOpacity key={host.id} style={styles.hostCard}>
                  <Image 
                    source={{ uri: host.image }} 
                    style={styles.hostImage} 
                  />
                  <View style={styles.hostInfo}>
                    <Text style={styles.hostName}>{host.name}</Text>
                    <Text style={styles.hostDetails}>{host.age} • {host.location}</Text>
                    <View style={styles.hostInterests}>
                      {host.interests.map((interest, index) => (
                        <Text key={index} style={styles.interestTag}>{interest}</Text>
                      ))}
                    </View>
                    <Text style={styles.hostRating}>★ {host.rating}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {activeTab === 'explore' && (
            <View>
              {moments.map(moment => (
                renderMomentContent(moment)
              ))}
            </View>
          )}

          {activeTab === 'inbox' && (
            <View style={styles.commonContainer}>
              {messages.map((message) => (
                <TouchableOpacity key={message.id} style={styles.messageContainer}>
                  <Image 
                    source={{ uri: message.sender.image }} 
                    style={styles.profileImage} 
                  />
                  <View style={styles.messageContent}>
                    <Text style={styles.username}>{message.sender.name}</Text>
                    <Text>{message.content}</Text>
                    <Text style={styles.timestamp}>
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </Text>
                    {message.unread && <View style={styles.unreadDot} />}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {activeTab === 'schedule' && (
            <View style={styles.commonContainer}>
              <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveView('upcoming')}>
                  <Text style={[styles.tabText, activeView === 'upcoming' && styles.activeTab]}>
                    Upcoming
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveView('history')}>
                  <Text style={[styles.tabText, activeView === 'history' && styles.activeTab]}>
                    History
                  </Text>
                </TouchableOpacity>
              </View>
              {activeView === 'upcoming' ? (
                <Text>Upcoming appointments will be displayed here.</Text>
              ) : (
                <Text>Past appointments will be displayed here.</Text>
              )}
            </View>
          )}

          {activeTab === 'profile' && (
            <View>
              {/* Profile Container */}
              <View style={styles.commonContainer}>
                <View style={styles.profileHeader}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/60' }} 
                    style={styles.profileImage} 
                  />
                  <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>Your Name</Text>
                    <Text style={styles.followInfo}>Followers: 100 | Following: 50</Text>
                  </View>
                  <TouchableOpacity style={styles.editButton}>
                    <Feather name="edit-2" size={20} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Options Container */}
              <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionItem}>
                  <View style={styles.optionLeft}>
                    <Feather name="check-circle" size={24} color="#666" />
                    <Text style={styles.optionText}>Verification</Text>
                  </View>
                  <Feather name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <View style={styles.optionLeft}>
                    <Feather name="dollar-sign" size={24} color="#666" />
                    <Text style={styles.optionText}>Earnings</Text>
                  </View>
                  <Feather name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <View style={styles.optionLeft}>
                    <Feather name="settings" size={24} color="#666" />
                    <Text style={styles.optionText}>Settings</Text>
                  </View>
                  <Feather name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <View style={styles.optionLeft}>
                    <Feather name="help-circle" size={24} color="#666" />
                    <Text style={styles.optionText}>Help and Support</Text>
                  </View>
                  <Feather name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <View style={styles.optionLeft}>
                    <Feather name="message-square" size={24} color="#666" />
                    <Text style={styles.optionText}>Feedback</Text>
                  </View>
                  <Feather name="chevron-right" size={24} color="#666" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Navigation Bar */}
        <View style={styles.navigation}>
          {['discover', 'explore', 'inbox', 'schedule', 'profile'].map((tab) => (
            <TouchableOpacity 
              key={tab}
              style={styles.navItem} 
              onPress={() => {
                setActiveTab(tab);
                handleOutsidePress(); // Close menus when changing tabs
              }}
            >
              <Feather 
                name={
                  tab === 'discover' ? 'home' :
                  tab === 'explore' ? 'compass' :
                  tab === 'inbox' ? 'message-square' :
                  tab === 'schedule' ? 'calendar' : 'menu'
                } 
                size={24} 
                color={activeTab === tab ? "#ff69b4" : "#666"} 
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  pinkerContainer: {
    flex: 1,
    backgroundColor: '#fff5f5',
  },
  header: {
    padding: 16,
    paddingTop: 48,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  searchButton: {
    padding: 8,
  },
  menuPopup: {
    position: 'absolute',
    top: 90,
    right: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    elevation: 4,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuItem: {
    padding: 12,
  },
  menuText: {
    textAlign: 'left',
    paddingVertical: 8,
  },
  sortControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
    marginRight: 8,
  },
  sortButton: {
    backgroundColor: '#fff5f5',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sortButtonText: {
    fontSize: 16,
    color: 'black',
  },
  sortOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    elevation: 4,
    zIndex: 1000,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    flex: 1,
    marginTop: 10,
    padding: 16,
  },
  commonContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  hostGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  hostCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  hostImage: {
    width: '100%',
    height: 150,
  },
  hostInfo: {
    padding: 12,
  },
  hostName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hostDetails: {
    color: '#666',
    marginBottom: 8,
  },
  hostInterests: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 8,
  },
  interestTag: {
    backgroundColor: '#f5f5f5',
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    color: '#666',
  },
  hostRating: {
    color: '#ff69b4',
    fontWeight: 'bold',
  },
  navigation: {
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  singlePostContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  postContent: {
    marginBottom: 12,
    color: '#666',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  postImage: {
    width: 100,
    height: 100,
    marginRight: 12,
    marginVertical: 8,
    borderRadius: 8,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  messageContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  unreadDot: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tabText: {
    marginRight: 16,
    fontSize: 18,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  profileInfo: {
    flex: 1,
    marginRight: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  followInfo: {
    color: '#666',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  saveButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  centeredText: {
    textAlign: 'center',
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    color: '#65676B',
  },
  postStats: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  statsText: {
    color: '#65676B',
    fontSize: 14,
  },
  optionsContainer: {
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 12,
    padding: 8,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#666',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff5f5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 40, // Match height of sort button
  },
  searchIcon: {
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default Pinker;