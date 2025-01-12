import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartContext } from '../data/Cardprovider';

interface CourseCardProps {
  title: string;
  price: string;
  rating: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, price, rating }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CourseCard must be used within a CartProvider');
  }

  const { addToCart, removeFromCart, cartItems } = cartContext;

  // Check if the item is in the cart
  const isItemInCart = cartItems.includes(title);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <View style={styles.footer}>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={16} color="#f1c40f" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => isItemInCart ? removeFromCart(title) : addToCart(title)}>
            <MaterialCommunityIcons
              name={isItemInCart ? 'minus' : 'plus'}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#27ae60',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#f39c12',
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default CourseCard;
