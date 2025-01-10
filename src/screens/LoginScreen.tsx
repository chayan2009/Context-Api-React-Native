import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../utils/Types';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password.');
      return;
    }
    navigation.navigate('Home', { email, password }); // Navigate with params
  };

  const handleSocialLogin = (platform: string) => {
    Alert.alert(`Login with ${platform}`);
  };

  const handleSignUp=()=>{
     navigation.navigate('Registration')
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/splash_logo.jpg')} // Replace with your logo
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.socialLoginText}>Or sign in with</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin('Google')}
        >
          <Icon name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin('Facebook')}
        >
          <Icon name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin('Twitter')}
        >
          <Icon name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
      </View>

      {/* Signup Link */}
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#3498db',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLoginText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
