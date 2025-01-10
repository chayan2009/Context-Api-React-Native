import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define types for your route params
type RootStackParamList = {
  Home: undefined;
  Description: { item: { id: number; name: string; desc: string; price: number } };
};

// Define the props for the DescriptionScreen
type DescriptionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Description'>;
type DescriptionScreenRouteProp = RouteProp<RootStackParamList, 'Description'>;

interface DescriptionScreenProps {
  route: DescriptionScreenRouteProp;
  navigation: DescriptionScreenNavigationProp;
}

const DescriptionScreen: React.FC<DescriptionScreenProps> = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItemCard}>
        <Image
          source={require('../assets/splash_logo.jpg')} // Replace with actual images
          style={styles.menuImage}
        />
        <View style={styles.menuDetails}>
          <Text style={styles.menuName}>{item.name}</Text>
          <Text style={styles.menuDescription}>{item.desc}</Text>
          <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => {
              // Logic for adding to cart
              Alert.alert('Added to Cart', `${item.name} has been added to your cart.`);
            }}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#3498db',
  },
  backButton: {
    color: '#fff',
    fontSize: 18,
  },
  menuItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  menuImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  menuDetails: {
    flex: 1,
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  menuPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DescriptionScreen;
