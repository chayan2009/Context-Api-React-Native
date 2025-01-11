import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CourseCard from './CourseCard';

// Define the type for a course
interface Course {
  id: string;
  title: string;
  price: string;
  rating: string;
}
const courses: Course[] = [
    { id: '1', title: 'Jee-Physics', price: '$90', rating: '5' },
    { id: '2', title: 'Advanced Chemistry', price: '$75', rating: '4.5' },
    { id: '3', title: 'Math Mastery', price: '$85', rating: '4.8' },
    { id: '4', title: 'Biology Basics', price: '$60', rating: '4.2' },
    { id: '5', title: 'English Grammar', price: '$50', rating: '4.7' },
    { id: '6', title: 'World History', price: '$70', rating: '4.3' },
    { id: '7', title: 'Programming with Python', price: '$120', rating: '5' },
    { id: '8', title: 'Data Science Fundamentals', price: '$140', rating: '4.9' },
    { id: '9', title: 'Machine Learning Basics', price: '$130', rating: '4.6' },
    { id: '10', title: 'Web Development Bootcamp', price: '$110', rating: '4.8' },
    { id: '11', title: 'Android Development', price: '$100', rating: '4.7' },
    { id: '12', title: 'iOS Development', price: '$120', rating: '4.5' },
    { id: '13', title: 'Digital Marketing', price: '$95', rating: '4.4' },
    { id: '14', title: 'SEO Mastery', price: '$80', rating: '4.6' },
    { id: '15', title: 'Photography Basics', price: '$60', rating: '4.5' },
    { id: '16', title: 'Graphic Design Masterclass', price: '$150', rating: '4.9' },
    { id: '17', title: 'Music Theory 101', price: '$70', rating: '4.3' },
    { id: '18', title: 'Film Editing Essentials', price: '$100', rating: '4.8' },
    { id: '19', title: 'Artificial Intelligence Overview', price: '$200', rating: '4.9' },
    { id: '20', title: 'Cloud Computing Basics', price: '$180', rating: '4.7' },
  ];
  
const CourseList = () => {
  const renderItem = ({ item }: { item: Course }) => (
    <View style={styles.gridItem}>
      <CourseCard title={item.title} price={item.price} rating={item.rating} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 5,
  },
  gridItem: {
    flex: 1,
    margin: 5, // Add margin to space items within the grid
  },
});

export default CourseList;
