import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';    // To use Entypo icon family set
import HomeScreen from './src/screens/home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults'

const post1 = feed[0];
const post2 = feed[1];

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

        <SearchResultsScreen/>

    </View>
  );
}


