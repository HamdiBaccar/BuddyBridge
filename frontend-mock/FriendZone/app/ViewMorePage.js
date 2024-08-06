import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProfileIB from '../assets/SVGs/ProfileIconBox';
import HeartCircle from '../assets/SVGs/HeartCircle';
import Localisation from '../assets/SVGs/Localisation';
import { FontAwesome } from '@expo/vector-icons';

const ViewMorePage = () => {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null); // To store any errors

  useEffect(() => {
    const userId = '66ae6cc6b678312930df126c'; // Static user ID for debugging

    const fetchFriends = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/suggest-friends/${userId}`);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON data
        console.log('Fetched data:', data); // Debugging output
        setFriends(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching friends:', error); // Debugging output
        setError(error.message); // Store error message for display
      }
    };

    fetchFriends();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={friends}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.BoxContainer}>
              <View style={styles.circle} />
              <View style={styles.iconTextContainer}>
                <ProfileIB />
                <Text style={styles.profileInfo}>{item.childUsername}</Text>
              </View>
              <View style={styles.iconTextContainer}>
                <HeartCircle style={styles.heart} />
                <Text style={styles.heartInfo}>{item.interests && Array.isArray(item.interests) ? item.interests.join(', ') : 'No interests'}</Text>
              </View>
              <View style={styles.iconTextContainer}>
                <Localisation style={styles.localisation} />
                <Text style={styles.localisationInfo}>{item.governorat}</Text>
              </View>
              <View style={styles.addCircle}>
                <FontAwesome name="plus" size={16} color="#FFFFFF" style={styles.addIcon} />
              </View>
            </View>
          )}
        
      />

      )}
    </View>
  );
}

export default ViewMorePage;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor:'#FFFFFF',
    
  },

  Switchinput: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 195,
    zIndex: 1,
  },

  iconTextContainer: {
    flexDirection: 'row',  // Aligns children in a row
    alignItems: 'center',  // Centers children vertically
    marginTop:10,
    marginRight:40,       // Space between rows
  },

  ArrowInput: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 195,
    zIndex: 1,
  },
  ProfilePic: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 270,
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    left: 30,
    marginTop: 30,
    zIndex: 1,
  },
  searchContainer: {
    
    alignItems: 'center',
    borderColor: '#1C3F83',
    borderWidth: 1,
    borderRadius: 15,
    height: 30,
    width:30,
    marginTop: 26,
    marginLeft: 120,
    
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 3,
    marginTop: 4,


  },
  verticalLine: {
    height: '70%',
    width: 1,
    backgroundColor: '#1C3F83',
    marginHorizontal: 10,
  },
  searchInput: {
    fontFamily: 'Poppins-Medium',
    flex: 1,
    paddingHorizontal: 1,
    fontSize:20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '95%',
    marginTop: 30,
  },
  
profileInfo:{
marginLeft:8,
fontWeight:'500',
fontFamily:'Poppins-Medium',
},
heartInfo:{
  marginRight:55,
  fontFamily: 'Poppins-Medium',
},



localisationInfo:{
  marginRight:20,
  fontFamily: 'Poppins-Medium',
},


  Suggest:{
fontFamily: 'Poppins-Medium',
fontWeight: '500',
fontSize : 18,
marginLeft:20,
marginBottom:7,
  },

viewMore:{
color: '#747688',
fontSize: 14,
fontWeight: '700',
fontFamily: 'Poppins-ExtraBold',
marginTop : -3,
marginLeft:5,
},

viewMoreContainer: {
  flexDirection: 'row',
  alignItems: 'center', 
},

vectorIcon: {
  width: 20, 
  height: 20, 
  marginTop:9,
  marginLeft:8,
},


circle: {
  width: 50,                  
  height: 50,                  
  borderRadius: 25,            
  backgroundColor: '#FFFFFF',     
  borderWidth: 1,              
  borderColor: '#00000080',
  top: -25,
  position: 'absolute',
},

addCircle:{
  width: 40,                  
  height: 40,
  borderRadius: 20,            
  backgroundColor: '#56A7FF',     
  borderWidth: 1,
  borderColor: '#FFFFFF',
  top:126,
  position: 'absolute',
  
},

addIcon:{
  top:10,
  marginLeft:12,
  
  position: 'absolute',

},

BoxContainer:{
  width: 180,         
  height: 146.44,          
  borderWidth: 1,      
  borderColor: '#00000080',  
  borderRadius: 16,
  marginTop:40,
  marginBottom:30,
  position: 'relative',
  alignItems: 'center',
    justifyContent: 'center',
},

BoxView:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center', 
   
},

contentContainer: {
  paddingHorizontal: 10,
},
});
