import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../../assets/home/searchIcon.svg';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.greeting}>
              <Text style={styles.title}>Hi, plant lover!</Text>
              <Text style={styles.subtitle}>Good Afternoon! ⛅</Text>
            </View>

            <View style={styles.inputWrapper}>
              <SearchIcon style={styles.searchIcon} />
              <TextInput style={styles.input} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
