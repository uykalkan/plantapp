import React from 'react';
import {
  FlatList,
  FlatListProps,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../../assets/images/home/searchIcon.svg';
import EnvelopeIcon from '../../assets/images/home/envelopeIcon.svg';
import {getCategories} from '../../services/getCategories';
import {Category} from '../../types/Category';
import {getQuestions} from '../../services/getQuestions';
import {Question} from '../../types/Question';
import Input from '../../components/Input';
import IosRightIcon from '../../assets/images/home/iosRightIcon.svg';

const HomeScreen: React.FC = () => {
  const renderCategoryItem: FlatListProps<Category>['renderItem'] = ({
    item,
  }) => {
    return (
      <View style={styles.categoryWrapper}>
        <View style={styles.categoryInner}>
          <Image
            source={{uri: item.image.url}}
            style={styles.categoryBackgroundImage}
          />
          <Text style={styles.categoryTitle}>{item.title}</Text>
        </View>
      </View>
    );
  };

  const renderQuestionItem: FlatListProps<Question>['renderItem'] = ({
    item,
  }) => {
    return (
      <ImageBackground
        style={styles.questionWrapper}
        source={{uri: item.image_uri}}>
        <View style={styles.questionTitle}>
          <Text style={styles.questionTitleText}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.header}>
          <SafeAreaView>
            <View style={styles.greeting}>
              <Text style={styles.title}>Hi, plant lover!</Text>
              <Text style={styles.subtitle}>Good Afternoon! ⛅</Text>
            </View>
          </SafeAreaView>

          <View style={styles.inputWrapper}>
            <Input
              placeholder="Search for plants"
              addonBefore={<SearchIcon />}
            />
          </View>

          <Image
            style={styles.headerBackgroundImage}
            source={require('../../assets/images/home/headerBg.png')}
          />
        </View>
        <View style={styles.premiumBox}>
          <EnvelopeIcon style={styles.envelopeIcon} />
          <View style={styles.premiumBoxCenter}>
            <Text style={styles.premiumBoxTitle}>FREE Premium Available</Text>
            <Text style={styles.premiumBoxSubTitle}>
              Tap to upgrade your account!
            </Text>
          </View>
          <View style={styles.premiumBoxRight}>
            <IosRightIcon />
          </View>
        </View>
        <Text style={styles.getStarted}>Get Started</Text>

        <FlatList
          contentContainerStyle={styles.questionContainer}
          style={styles.questionList}
          horizontal
          data={getQuestions()}
          renderItem={renderQuestionItem}
          keyExtractor={item => String(item.id)}
        />

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.categoryContainer}
          data={getCategories().data}
          numColumns={2}
          renderItem={renderCategoryItem}
          keyExtractor={item => String(item.id)}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
