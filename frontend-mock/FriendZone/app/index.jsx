// index.jsx
import {React,useEffect,useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat, withSequence } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { width } = Dimensions.get('window');

export default function OBScreen() {
  // for image animation
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      true
    );
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });



  const GoToSignUpPress = () => {
      router.push('/Payment');
   
  };

  const GoToSignInPress = () => {
    router.push('/SignIn');
  };

  return (
    
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View>
        <Animated.Image
            style={[styles.image, animatedImageStyle]}
            source={require('../assets/image3.png')}
            resizeMode='contain'
          />
          <View>
            <Text style={styles.header}>Follow your Passion</Text>
            <Text style={styles.secondHeader}>Connect with Enthusiasts, Share</Text>
            <Text style={styles.thirdHeader}>Your Journey</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonLabel} onPress={GoToSignUpPress}>
            Continue
          </Button>
        </View>
        <TouchableOpacity onPress={GoToSignInPress}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: wp('70%'),
    marginLeft: wp('15%'),
    marginTop: hp('16%'),
  },
  header: {
    marginTop: hp('2%'),
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginBottom: 5,
    marginRight: 60,
  },
  secondHeader: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',
  },

  thirdHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5A5A5A',
    marginLeft: 50,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },

  button: {
    backgroundColor: '#1C3F83',
    marginBottom: hp('5%'),
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },

  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  signInText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: wp('18%'),
    fontFamily: 'Poppins-Medium',
    
  },
  signInLink: {
    fontWeight: '500',
    color: '#4E7AD0',
    fontFamily: 'Poppins-Medium',
  },
  bottomContainer: {
    marginTop: hp('15%'),
    alignItems: 'center',
    paddingBottom: hp('3%'),
  },
  signin: {
    alignItems: 'center',
    marginLeft: 20,
  },
});
