import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert,TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput as PaperTextInput, Provider, DefaultTheme } from 'react-native-paper';
import { router } from 'expo-router';
import UserIcon from '../assets/SVGs/UserIcon'
import PasswordIcon from '../assets/SVGs/PasswordIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1C3F83',
  },
};

const SignIn = () => {

    const GoToSignUpPress = () => {
        console.log('Navigating to SignUp page');
        router.push('/SignUp');
      };
      
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = async () => {
    try {
      // Validate inputs
      if (!username) {
        setUsernameError('Username is required');
        return;
      }
      if (!password) {
        setPasswordError('Password is required');
        return;
      }

      // Make API request
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ childUsername: username, parentPassword: password }), // Use the correct field names
      });

      const data = await response.json();

      // Handle API response
      if (response.ok) {
        return Alert.alert('Sign-in successful !')
        console.log('Sign-in successful');
      } else {
        // Error in sign-in, handle error (e.g., display error message)
        Alert.alert('Sign In Failed', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      Alert.alert('Error', 'Failed to sign in. Please try again later.');
    }
  };

  return (
    <Provider theme={customTheme}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Sign In</Text>
          <Text style={styles.secondHeader}>Enter your credentials</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.iconInputContainer}>
              <UserIcon style={styles.icon} />
              <PaperTextInput
                style={styles.inputWithIcon}
                value={username}
                onChangeText={setUsername}
                mode="outlined"
              />
            </View>
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.iconInputContainer}>
              <PasswordIcon style={styles.icon}/>
              <PaperTextInput
                style={styles.inputWithIcon}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                mode="outlined"
              />
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </View>
          <Text style={styles.ForgotPasswordLink}>Forgot Password?</Text>
          <Button mode="contained" onPress={handleSignIn} labelStyle={styles.buttonLabel} style={styles.button}>
          Done
        </Button>
        <TouchableWithoutFeedback onPress={GoToSignUpPress}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign Up</Text>
          </Text>
        </TouchableWithoutFeedback>

        </View>
        
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginBottom: hp('25%'),
    flex: 1,
    padding: wp('7%'),
    justifyContent: 'center',
  },
  header: {
    marginTop: hp('20%'),
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
  button: {
    backgroundColor: '#1C3F83',
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'relative',
    bottom: wp('-40%'),
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
    bottom: hp('-22%'),
  },
  signInLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4E7AD0',
    fontFamily: 'Poppins-Medium',
  },

  ForgotPasswordLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4E7AD0',
    fontFamily: 'Poppins-Medium',
    right: wp('-50%'),
  }
});

export default SignIn;
