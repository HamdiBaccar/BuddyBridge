import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, ActivityIndicator,TouchableOpacity } from 'react-native';
import { Checkbox, Button, TextInput as PaperTextInput, Provider, DefaultTheme } from 'react-native-paper';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import ProfileCircle from '../assets/SVGs/ProfileCircle'
import AgeIcon from '../assets/SVGs/AgeIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1C3F83',
  },
};


const Payment = () => {

  const GoToSignInPress = () => {
    
    router.push('/SignIn');
  };

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [localisation, setLocalisation] = useState("");
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [usernameError, setUsernameError] = useState(""); // State for username error message
  const [ageError, setAgeError] = useState(""); // State for age error message
  const [checkboxError, setCheckboxError] = useState(""); // State for checkbox error message


  // Function to fetch current location and set governorate
  const fetchCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const { region } = reverseGeocode[0];
        const governorateName = `${region}`;
        setLocalisation(governorateName); // Set governorate as city and region
      } else {
        Alert.alert('Location not found', 'Unable to fetch location information');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      Alert.alert('Error fetching location');
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const validateInputs = () => {
    let valid = true;

    if (username.length < 8 || username.length > 16) {
      setUsernameError("Username should be between 8 and 16 characters");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (isNaN(age) || age < 13 || age > 18) {
      setAgeError("Age should be a number between 13 and 18");
      valid = false;
    } else {
      setAgeError("");
    }

    if (!isAgeConfirmed) {
      setCheckboxError("Please confirm your child's age");
      valid = false;
    } else {
      setCheckboxError("");
    }

    return valid;
  };

  const handleSignup = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const userData = {
        CIN: "003304529",
        parentName: "Mehhhhhhhhrrrez",
        parentEmail: "Mehhhhhhhrerz@example.com",
        parentPassword: "hamdi2002",
        phoneNumber: "22456978",
        address: "Med Alii,Gabes",
        paymentInfo: "Payyment-info",
        childUsername: username,
        childAge: age,
        governorat: localisation,
        confirmedAge: isAgeConfirmed,
      };

      //sending request
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      else{
        return Alert.alert('SignUp has been successfully completed!')
      }
      
    }
    catch (err) {
      console.log(err);
      Alert.alert(
        'Something went wrong, try again later!'
      )
    }
  };

  return (
    
      <Provider theme={customTheme}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Select a Username</Text>
            <Text style={styles.secondHeader}>Child information</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Child Username</Text>
              <View style={styles.iconInputContainer}>
              <ProfileCircle style={styles.icon}/>
                <PaperTextInput
                  value={username}
                  onChangeText={setUsername}
                  style={styles.inputWithIcon}
                  mode="outlined"
                  
                  theme={{ colors: { primary: '#1C3F83' } }} // Change focused border color
                />
              </View>
              {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Child Age</Text>
              <View style={styles.iconInputContainer}>
              <AgeIcon style={styles.icon}/>
                <PaperTextInput
                  value={age}
                  onChangeText={setAge}
                  style={styles.inputWithIcon}
                  mode="outlined"
                  keyboardType="numeric"
            
                  theme={{ colors: { primary: '#1C3F83' } }} // Change focused border color
                />
              </View>
              {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                status={isAgeConfirmed ? 'checked' : 'unchecked'}
                onPress={() => setIsAgeConfirmed(!isAgeConfirmed)}
                color="#4E7AD0"
              />
              <Text style={styles.Childlabel}>I confirm that my child is {age} years old</Text>
            </View>
            {checkboxError ? <Text style={styles.errorText}>{checkboxError}</Text> : null}

            <View style={styles.inputContainer}>
              {loading ? (
                <View style={styles.loadingContainer}>
                  <Text style={styles.label}>Searching for your location, please wait...
               
                  </Text>
                  <ActivityIndicator size="small" color="#1C3F83" />
                </View>
              ) : (
                <>
                  <Text style={styles.governorate}>Governorate: {localisation}</Text>
                </>
              )}
            </View>

            <Button mode="contained" onPress={handleSignup} labelStyle={styles.buttonLabel} style={styles.button}>
              Done
            </Button>
            <TouchableOpacity onPress={GoToSignInPress}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
          </View>
        </View>
      </Provider>

  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    
    flex: 1,
    padding: wp('7%'),
    justifyContent: 'center',
  },

  Childlabel:{
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginTop:1,
  },

  header: {
    marginTop: hp('8%'),
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    },
  secondHeader: {
    fontSize: 16,
    marginBottom: hp('4%'),
    fontWeight: '500',
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',
  },
  inputContainer: {
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: 14,
    marginBottom: hp('1%'),
    fontWeight: '500',
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',
  },
  iconInputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: hp('1.2%'),
    zIndex: 1,
  },
  inputWithIcon: {
    paddingLeft: wp('7%'),
    height: 40,
    backgroundColor: '#F2F2F2',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: hp('0.5%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  button: {
    backgroundColor: '#1C3F83',
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'relative',
    bottom: wp('-4%'),
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
    color: '#5A5A5A',
    textAlign: 'center',
    marginTop: hp('3%'),
    fontFamily: 'Poppins-Medium',
    position: 'relative',
    bottom: hp('-5%'),
  },
  signInLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4E7AD0',
    fontFamily: 'Poppins-Medium',
  },
  loadingContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  governorate: {
    fontSize: 14,
    marginBottom: hp('8%'),
    fontWeight: '500',
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',

  }
});
