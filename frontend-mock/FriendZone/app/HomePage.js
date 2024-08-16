import { StyleSheet, Text, View, FlatList,TouchableOpacity,Dimensions,Animated,Image} from 'react-native';
import {React,useState,useEffect,useRef} from 'react';
import Sidebar from '../assets/SVGs/Sidebar';
import Profile from '../assets/SVGs/Profile';
import ArrowsPic from '../assets/SVGs/arrows';
import { FontAwesome } from '@expo/vector-icons';
import Vector from '../assets/SVGs/Vector';
import ProfileIB from '../assets/SVGs/ProfileIconBox';
import HeartCircle from '../assets/SVGs/HeartCircle';
import Localisation from '../assets/SVGs/Localisation';
import { router } from 'expo-router';
import MyProfile from '../assets/SVGs/MyProfile';
import MessageCircle from '../assets/SVGs/MessageCircle';
import Calendar from '../assets/SVGs/Calendar';
import Bookmark from '../assets/SVGs/Bookmark';
import Mail from '../assets/SVGs/Mail';
import Settings from '../assets/SVGs/Settings';
import HelpCircle from '../assets/SVGs/HelpCircle';
import Logout from '../assets/SVGs/Logout';
import ProfPic from '../assets/ProfPic.png'


const { width, height } = Dimensions.get('window');
const sidebarWidth = (202 / 375) * width;
const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null); 
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const userId = '66ae6cc6b678312930df126c'; 

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`http://192.168.1.243:3000/api/suggest-friends/${userId}`);
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

  const GoToProfilePage = () => {
    router.push('/Profile');
  };
  
  const toggleSidebar = () => {
    const toValue = isSidebarVisible ? 0 : 1;
    Animated.timing(sidebarAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsSidebarVisible(!isSidebarVisible));
  };

  const sidebarTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-sidebarWidth, 0], // Sidebar slides in and out
  });

  const contentTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, sidebarWidth], // Content slides right
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarTranslateX }] }]}>
        <View style={styles.profilecircle}>
        <Image
        source={ProfPic}
        style={styles.profileImage}
      />
        </View>
        <Text style={styles.Name}>Flen Fouleni</Text>
        <View style={styles.sidebarContent}>

            <View style={styles.iconContainer}>
<MyProfile style={styles.prof}/>
<Text style={styles.myprofileInfo}>My Profile</Text>
</View>

<View style={styles.iconContainer1}>
<MessageCircle style={styles.mes}/>
<Text style={styles.messageInfo}>Message</Text>
</View>

<View style={styles.iconContainer1}>
<Calendar style={styles.cal}/>
<Text style={styles.calendarInfo}>Calendar</Text>
</View>

<View style={styles.iconContainer1}>
<Bookmark style={styles.book}/>
<Text style={styles.bookmarkInfo}>Bookmark</Text>
</View>

<View style={styles.iconContainer1}>
<Mail style={styles.mail}/>
<Text style={styles.mailInfo}>Contact us</Text>
</View>

<View style={styles.iconContainer1}>
<Settings style={styles.set}/>
<Text style={styles.settingsInfo}>Settings</Text>
</View>

<View style={styles.iconContainer1}>
<HelpCircle style={styles.help}/>
<Text style={styles.helpInfo}>Helps & FAQs</Text>
</View>

<View style={styles.iconContainer1}>
<Logout style={styles.log}/>
<Text style={styles.logoutInfo}>Log Out</Text>
</View>
        </View>
      </Animated.View>
      
      <Animated.View style={[styles.content, { transform: [{ translateX: contentTranslateX }] }]}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={toggleSidebar}>
          <Sidebar style={styles.icon} />
          </TouchableOpacity>
          
          <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="#000000" style={styles.searchIcon} />
          </View>
          <View style={styles.arrowButton}>
        <ArrowsPic style={styles.ArrowInput} />
          </View>
          <TouchableOpacity onPress={GoToProfilePage}>
          <Profile style={styles.ProfilePic} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.Suggest}>Friends Suggestions</Text>
          <TouchableOpacity onPress={() => console.log('Go to view more page')}>
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
      </Animated.View>
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
  
Name:{
fontSize: 20,
fontWeight: '500',
fontFamily: 'Poppins-Medium',
marginTop: 9,
marginRight: 16,
},



sidebarContent:{
  alignItems: 'center',
  justifyContent: 'center',
marginTop: 24,
marginRight: 18,
},

prof:{
right: 15,
},

myprofileInfo:{
fontFamily: 'Poppins-SemiBold',
fontSize: 16,
fontWeight: '600',
},

iconContainer:{
flexDirection: 'row',
},

iconContainer1:{
  flexDirection: 'row',
  marginTop: 32,
},

mes:{
  right: 17,
  top:3,
  },
  
  messageInfo:{
  fontFamily: 'Poppins-SemiBold',
  fontSize: 16,
  fontWeight: '600',
  },
  
iconContainer1:{
    flexDirection: 'row',
    marginTop: 32,
  },
  cal:{
    right: 15,
    },
    
    calendarInfo:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    },

iconContainer1:{
flexDirection: 'row',
marginTop: 32,
},

book:{
  right: 8,
  },
  
  bookmarkInfo:{
  fontFamily: 'Poppins-SemiBold',
  fontSize: 16,
  fontWeight: '600',
  marginLeft: 7,
  },

 iconContainer1:{
          flexDirection: 'row',
          marginTop: 32,
          },
          mail:{
            right: 3,
            },
            
           mailInfo:{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            fontWeight: '600',
            marginLeft: 10,
            },
          iconContainer1:{
            flexDirection: 'row',
            marginTop: 32,
            },
            set:{
              right: 13,
              },
              
              settingsInfo:{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 12,
              },
            iconContainer1:{
              flexDirection: 'row',
              marginTop: 32,
              },
              help:{
                left: 12,
                },
                
                helpInfo:{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 26,
                },
              iconContainer1:{
                flexDirection: 'row',
                marginTop: 32,
                },

                log:{
                  right: 17,
                  },
                  
                 logoutInfo:{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                  fontWeight: '600',
                  marginRight: 14,
                  },

  sidebar: {
    position: 'absolute',
    top: (50/375)*width,
    bottom: 0,
    left: 0,
    right: sidebarWidth,
    width: sidebarWidth,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderColor: '4D4D4D',
    borderWidth: 1,
    zIndex: 2,
    padding: 20,
  },



profilecircle:{
  width: 58,
  height: 58,
  borderRadius: 29,
  borderColor: '#1C3F83',
   borderWidth: 1,
   overflow: 'hidden', 
    justifyContent: 'center', 
    alignItems: 'center',
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
    justifyContent: 'center',
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
    justifyContent: 'center',
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
    marginTop: height * -0.003, 
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
    justifyContent: 'center'
  },
  vectorIcon: {
    width: width * 0.05, 
    height: height * 0.025, 
    marginLeft: 3,
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
    shadowOffset: { width: 0, height: 4 }, 
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
    paddingHorizontal: width * 0.01,
  },
});
