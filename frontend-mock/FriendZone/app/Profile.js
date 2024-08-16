import { StyleSheet, View, Image, Dimensions, Text , TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');
import ProfileDesign from '../assets/ProfileDesign.png';
import ProfPic from '../assets/ProfPic.png';
import Star from '../assets/SVGs/Star';
import EditProfile from '../assets/SVGs/EditProfile';
import WriteIcon from '../assets/SVGs/WriteIcon';
import SportsIcon from '../assets/SVGs/SportsIcon';
import FoodIcon from '../assets/SVGs/FoodIcon';
import MusicIcon from '../assets/SVGs/MusicIcon';
import BackButton from '../assets/SVGs/BackButton';
import { router } from 'expo-router';




const Profile = () => {

  const GoBackHomePage = () => {
    console.log('Navigating to HomePage'); // Check if this log appears
    router.push('/HomePage');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={GoBackHomePage}>
      <BackButton style={styles.button}/>
      </TouchableWithoutFeedback>
      <View style={styles.BoxContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={ProfileDesign}
            style={styles.profileDesign}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['#57C4FF', '#AEAEF6']}
            start={{ x: 0.1465, y: 0 }}
            end={{ x: 0.8498, y: 1 }}
            style={styles.gradientOverlay}
          />
        </View>
        <View style={styles.circleWrapper}>
          <LinearGradient
            colors={['#57C4FF', '#AEAEF6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          >
            <View style={styles.circle}>
              <Image
                source={ProfPic}
                style={styles.profileImage}
              />
            </View>
          </LinearGradient>
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.nameStyle}>Lorem lipsum</Text>
          <Star style={styles.star}/>
        </View>
        <View style={styles.rectangle}>
            <View style={styles.editContainer}>
            <EditProfile/>
            <Text style={styles.editText}>Edit Profile</Text>
            </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.aboutme}>About Me</Text>
                <Text style={styles.descr}>I'm passionate about sports and events,I love attending games, concerts, and festivals, and I'm excited to connect with others who share the same enthusiasm!</Text>
            </View>
      </View>
      <View style={styles.Field}>
      <Text style={styles.interests}>Interests :</Text>
      <View style={styles.box}>
      <WriteIcon/>
        <Text style={styles.change}>CHANGE</Text>
      </View>
      </View>
      <View style={styles.InterestsGroup}>
<View style={styles.Int}>
<SportsIcon style={styles.basketball}/>
<Text style={styles.sportsText}>Sports</Text>
</View>
<View style={styles.Int1}>
<FoodIcon style={styles.fork}/>
<Text style={styles.foodText}>Food</Text>
</View>
<View style={styles.Int2}>
<MusicIcon style={styles.tune}/>
<Text style={styles.musicText}>Music</Text>
</View>
      </View>
    </View>
    
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    backgroundColor: '#FFFFFF',
  },

aboutme:{
fontFamily: 'Poppins-SemiBold',
fontSize: 18,
color:'#000000'
},

button:{
position: 'absolute',
top: (120/1012)*height,
left: (27/375)*width
},

basketball:{
marginBottom:3,
marginRight: 3,
},

change:{
color: '#56A7FF',
fontFamily: 'Poppins-Regular',
fontSize: 10,
marginLeft: 7,
},

sportsText: {
color: '#FFFFFF',
fontSize: 15,
fontFamily: 'Poppins-Medium',
marginLeft:5,
},

InterestsGroup:{
  marginTop: 16,
flexDirection: 'row',
  position: 'relative',
},

Int: {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
width: 106,
height: 39,
borderRadius: 21,
backgroundColor: '#A05D2C',

marginLeft: 20,
shadowColor: '#2E2E4F',
},

Int1: {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: 106,
  height: 39,
  backgroundColor: '#C4F4FC',
  borderRadius: 21,
  marginLeft: 8,
},
Int2:{
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: 106,
  height: 39,
  backgroundColor: '#FCCBD7',
  borderRadius: 21,
  marginLeft: 8,
},

musicText:{
  color: '#FFFFFF',
  fontSize: 15,
  fontFamily: 'Poppins-Medium',
  marginLeft:5,
},
tune:{
  marginBottom:3,
  marginRight: 3,
},

foodText:{
  color: '#FFFFFF',
  fontSize: 15,
  fontFamily: 'Poppins-Medium',
  marginLeft:5,
},

fork:{
  marginBottom:3,
  marginRight: 3,
},

box: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: 85,
  height: 28,
  backgroundColor: '#F6F8FB',
  right: 0,
  marginRight: 8,
  marginTop: 24,
  borderRadius: 15,
},

Field:{
flexDirection: 'row',
position: 'relative',
},

interests: {
fontFamily: 'Poppins-SemiBold',
fontSize: 18,
color: '#000000',
textAlignL: 'left',
paddingLeft: 26,
paddingTop : 24,

},

 descr:{
fontFamily: 'Poppins-Medium',
fontSize: 16,
color: '#FFFFFF',
flexWrap: 'wrap',
textAlign: 'left',
paddingRight: 40,
    
 },

  description:{
position: 'absolute',
left:26,
top:170,

  },

editText:{
color: '#FFFFFF',
fontSize: 16,
fontFamily: 'Poppins-ExtraBold',
marginLeft: 13,
},
editContainer: {
flexDirection: 'row',
position: 'absolute',
},

  nameStyle: {
    
    fontFamily: 'Poppins-Bold',
    fontSize: 21.6,
    color: '#FFFFFF', // Adjust text color as needed
    left: (20/375)*width,
  },

  BoxContainer: {
    width: '100%',
    height: (500 / 1012) * height,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: (200 / 1012) * height,
    borderColor: '#FFFFFF',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative', 
  },
  profileDesign: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },

  gradientBorder: {
    width: '100%',
    height: '100%',
    borderRadius: 49.5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 2,
  },

  circleWrapper: {
    width: 99, 
    height: 99, 
    borderRadius: 49.5, 
    position: 'absolute',
    overflow: 'hidden',
    top: height * -0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 47.5,
  },
  textContainer: {
    position: 'absolute',
    bottom: (360 / 1012) * height, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },

star:{
marginLeft: (30/375)*width,
},


rectangle: {
    position: 'absolute',
    width: (155/375)*width,           // Width of the rectangle
    height: (68/1012)*height,          // Height of the rectangle
    backgroundColor: 'transparent',  // Background color of the rectangle
    borderRadius: 10,     // Rounds all four corners
    borderWidth: 2,       // Border width
    borderColor: '#FFFFFF',  // Border color
    bottom: (285 / 1012)*height,
    left: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
