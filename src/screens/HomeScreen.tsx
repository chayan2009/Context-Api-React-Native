import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-ionicons';
import { categories, menuItems } from '../data/Mockdata';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(categories[0].id);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const navigation = useNavigation();

  // Filter menu items based on selected category
  const filteredMenu = menuItems.filter(
    (item) => item.categoryId === selectedCategory
  );

  // Handle adding item to cart
  const handleAddToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartCount(cartItems.length + 1);
    Alert.alert('Added to Cart', `${item.name} has been added to your cart.`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GreenGrocery</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={24} color="#fff" />
          {cartCount > 0 && (
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Category List */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              item.id === selectedCategory && styles.categoryItemSelected,
            ]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Text
              style={[
                styles.categoryText,
                item.id === selectedCategory && styles.categoryTextSelected,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Menu List */}
      <Text style={styles.sectionTitle}>Menu</Text>
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.menuList}
        renderItem={({ item }) => (
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
                onPress={() => handleAddToCart(item)}
              >
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => Alert.alert('Added to Favorites', `${item.name} has been added to your favorites.`)}
              >
                <Ionicons name="ios-heart" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => navigation.navigate('Description', { item })}
              >
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const DescriptionScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product Details</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cartCountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    padding: 10,
  },
  categoryList: {
    padding: 5,
  },
  categoryItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginRight: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  categoryItemSelected: {
    backgroundColor: '#3498db',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuList: {
    paddingVertical: 10,
    padding: 10,
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
    width: 80,
    height: 80,
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
  favoriteButton: {
    marginTop: 10,
  },
  viewDetailsButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#3498db',
    borderRadius: 6,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export { HomeScreen, DescriptionScreen };
