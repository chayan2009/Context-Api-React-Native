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

  const { addToCart } = cartContext;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <View style={styles.footer}>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={16} color="#f1c40f" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={addToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
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
    margin: 8, // Consistent spacing around the card
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
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CourseCard;
