import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const ProductDescription = () =>{

    return (
    <View style={styles.container} />);
};
export default ProductDescription;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
});
