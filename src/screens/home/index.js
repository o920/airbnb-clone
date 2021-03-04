import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';


const HomeScreen = (props) =>{
    return (
        <View>
            {/* Search Bar */}
            <Pressable 
                style={styles.searchbutton} 
                onPress = {()=> console.warn('search Btn clicked')}
            >
                    <Fontisto name ="search" size ={25} color ={"#f15454"}/>
                    <Text style = {styles.searchbuttonText}>Where are you going?</Text>
                    
            </Pressable>

            <ImageBackground 
                source={require('../../../assets/images/homescreen-background.jpg')} 
                style = {styles.image}
            >
                {/* title */}
                <Text style={styles.title}>Go Near</Text>

                {/* button */}
                <Pressable 
                    style={styles.button} 
                    onPress = {()=> console.warn('explore Btn clicked')}
                >
                    <Text style = {styles.buttonText}>Explore nearby stays</Text>
                </Pressable>


            </ImageBackground>
        </View>
    );
};

export default HomeScreen ;