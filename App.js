import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';    // To use Entypo icon family set
import HomeScreen from './src/screens/home';
import Post from './src/components/Post';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

        <Post />

    </View>
  );
}

