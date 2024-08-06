import { StyleSheet, Text, View, FlatList,TouchableOpacity,Dimensions} from 'react-native';
import {React,useState,useEffect} from 'react';
import Sidebar from '../assets/SVGs/Sidebar';
import Profile from '../assets/SVGs/Profile';
import ArrowsPic from '../assets/SVGs/arrows';
import { FontAwesome } from '@expo/vector-icons';
import Vector from '../assets/SVGs/Vector';
import ProfileIB from '../assets/SVGs/ProfileIconBox';
import HeartCircle from '../assets/SVGs/HeartCircle';
import Localisation from '../assets/SVGs/Localisation';
import { router } from 'expo-router';
const { width, height } = Dimensions.get('window');

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    const userId = '66ae6cc6b678312930df126c'; 

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/suggest-friends/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        setFriends(data); 
      } catch (error) {
        console.error('Error fetching suggestions:', error); 
        setError(error.message);
      }
    };

    fetchSuggestions();
  }, []);

  const GoToViewMorePage = () => {
    router.push('/ViewMorePage');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Sidebar style={styles.icon} />
        
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="#000000" style={styles.searchIcon} />
        </View>
        <View style={styles.arrowButton}>
        <ArrowsPic style={styles.ArrowInput} />
        </View>
        <Profile style={styles.ProfilePic} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.Suggest}>Friends Suggestions</Text>
        <TouchableOpacity onPress={GoToViewMorePage}>
          <View style={styles.viewMoreContainer}>
            <Text style={styles.viewMore}>View More</Text>
            <Vector style={styles.vectorIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.BoxView}>
        <FlatList
          data={friends.slice(0, 4)}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.BoxContainer}>
              <View style={styles.circle} />
              <View style={styles.iconTextContainer1}>
                <ProfileIB style={styles.profile} />
                <Text style={styles.profileInfo}>{item.childUsername}</Text>
              </View>
              <View style={styles.iconTextContainer2}>
                <HeartCircle style={styles.heart} />
                <Text style={styles.heartInfo}>{item.interests && Array.isArray(item.interests) ? item.interests.join(', ') : 'No interests'}</Text>
              </View>
              <View style={styles.iconTextContainer3}>
                <Localisation />
                <Text style={styles.localisationInfo}>{item.governorat}</Text>
              </View>
              <View style={styles.addCircle}>
                <Text style={styles.Plus}>+</Text>
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.05, // Dynamic paddingTop
    backgroundColor: '#FFFFFF',
  },
  



  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    paddingHorizontal: width * 0.05, 
    marginTop: height * 0.02, 
  },
  iconTextContainer1: {
    width: (118/180)*width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (12.43/1012)*height,
    marginLeft: (31/90)*width,  
  },
  iconTextContainer2: {
    width: (142/375)*width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (12/1012)*height,  
  },

  iconTextContainer3: {
    width: (109/375)*width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (12/1012)*height,  
  },

  Plus:{
    fontFamily: 'Poppins-Regular',
    width:14,
    height: 30,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    textAlign: 'left',
    color: '#FFFFFF',
    
  },

  arrowButton:{
    alignItems: 'center',
    borderColor: '#1C3F83',
    borderWidth: 1,
    borderRadius: 16,
    height: 32,
    width:32,
    marginTop: height * 0.03, 
    marginLeft: 6,
    
  },

  ArrowInput:{
    width: width * 0.05, 
    height: height * 0.025, 
     
    marginTop: height * 0.005, 
  },

  ProfilePic: {
    marginTop: height * 0.03, 
    zIndex: 1,
    marginLeft: 6,
  },
  icon: {
    marginTop: height * 0.03, 
    zIndex: 1,
  },
  searchContainer: {
    alignItems: 'center',
    borderColor: '#1C3F83',
    borderWidth: 1,
    borderRadius: 16,
    height: 32,
    width:32,
    marginTop: height * 0.03, 
    marginLeft: width*0.5, 
  },
  searchIcon: {
    width: width * 0.05, 
    height: height * 0.025, 
    marginLeft: width * 0.008, 
    marginTop: height * 0.005, 
  },
  verticalLine: {
    height: '70%',
    width: 1,
    backgroundColor: '#1C3F83',
    marginHorizontal: width * 0.025, 
  },
  searchInput: {
    fontFamily: 'Poppins-Medium',
    flex: 1,
    paddingHorizontal: width * 0.0025, 
    fontSize: width * 0.05, 
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: height * 0.03, 
  },
  profileInfo: {
    marginLeft: width * 0.02, 
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  heartInfo: {
    marginRight: width * 0.14, 
    fontFamily: 'Poppins-Medium',
  },
  localisationInfo: {
    marginRight: width * 0.05, 
    fontFamily: 'Poppins-Medium',
  },
  Suggest: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: width * 0.045, 
    marginLeft: width * 0.05, 
    marginBottom: height * 0.007, 
  },
  viewMore: {
    color: '#747688',
    fontSize: width * 0.035, 
    fontWeight: '700',
    fontFamily: 'Poppins-ExtraBold',
    marginTop: height * -0.003, 
    marginLeft: width * 0.0125, 
  },
  viewMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vectorIcon: {
    width: width * 0.05, 
    height: height * 0.025, 
    marginTop: height * 0.009, 
    marginLeft: width * 0.02, 
  },
  circle: {
    width: width * 0.125, 
    height: width * 0.125, 
    borderRadius: width * 0.0625, 
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000080',
    top: height * -0.025, 
    position: 'absolute',
  },
  addCircle: {
    width: (36.61/375)*width, 
    height: (36.61/375)*width, 
    borderRadius: width * 0.05, 
    backgroundColor: '#56A7FF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    top: (163/1012)*height, 
    position: 'absolute',
    shadowColor: '#56A7FF', // shadow color
    shadowOffset: { width: 0, height: 4 }, // shadow offset
    shadowOpacity: 0.25, // shadow opacity (64/255 = 0.25)
    shadowRadius: 4, // shadow radius
    elevation: 4, // for Android
    justifyContent: 'center', // centers children vertically
    alignItems: 'center', // centers children horizontally
  },
  addIcon: {
    top: height * 0.01, 
    marginLeft: width * 0.03, 
    position: 'absolute',
  },
  BoxContainer: {
    width: (180/375)*width, 
    height: (189.61/1012)*height, 
    borderWidth: 1,
    borderColor: '#00000080',
    borderRadius: 16,
    marginTop: height * 0.04, 
    marginLeft: (16/375)*width, 
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  contentContainer: {
    paddingHorizontal: width * 0.025,
  },
});
