import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../utils/Types';
import {StackNavigationProp} from '@react-navigation/stack';

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/splash_logo.jpg')}
      style={styles.imgbacground}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Food App</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </ImageBackground>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'red'
  },
  imgbacground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
