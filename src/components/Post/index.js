import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './styles';

const Post = (props) => {

    const post = props.post;
    return (
        <View style ={styles.container}>
            {/* Image */}
            <Image 
                style = {styles.image} 
                source = {{uri: post.image}}
            />
            {/* Bed * Bedroom */}
            <Text style={styles.bedroom}>
                {post.bed} bed {post.bedroom} bedroom
            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/* Old price & New price */}
            <Text style = {styles.prices}>
                <Text style = {styles.oldPrice}>${post.oldPrice}</Text>
                <Text style = {styles.newPrice}>  ${post.newPrice}</Text>
                /night
            </Text>

            {/* Total Price */}
            <Text style = {styles.totalPrice}>${post.totalPrice} total</Text>

        </View>
    );
};

export default Post;