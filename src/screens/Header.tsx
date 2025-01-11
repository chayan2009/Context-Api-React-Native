import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CartContext} from '../data/Cardprovider';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('Header must be used within a CartProvider');
  }

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  const {cartCount} = cartContext;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      <MaterialCommunityIcons name="cart-outline" size={24} color="#fff" />
      {cartCount > 0 && <Text style={styles.cartCount}>{cartCount}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  icon: {
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  cartCount: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#cc4129',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Header;
