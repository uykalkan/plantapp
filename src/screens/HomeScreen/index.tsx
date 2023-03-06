import React, {useEffect} from 'react';
import {
  FlatList,
  FlatListProps,
  Image,
  ImageBackground,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../../assets/images/home/searchIcon.svg';
import EnvelopeIcon from '../../assets/images/home/envelopeIcon.svg';
import {Category} from '../../types/Category';
import {Question} from '../../types/Question';
import Input from '../../components/Input';
import IosRightIcon from '../../assets/images/home/iosRightIcon.svg';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getCategories} from '../../redux/reduces/categorySlice';
import {getQuestions} from '../../redux/reduces/questionSlice';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

const HomeScreen: React.FC<NativeStackScreenProps<any>> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const onRefresh = React.useCallback(() => {
    dispatch(getQuestions());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      dispatch(getQuestions());
      dispatch(getCategories());
    });
  }, [dispatch, navigation]);

  const {categories, loading: categoriesIsLoading} = useAppSelector(
    state => state.category,
  );

  const {questions, loading: questionsIsLoading} = useAppSelector(
    state => state.question,
  );

  useEffect(() => {}, [dispatch]);

  const renderCategoryItem: FlatListProps<Category>['renderItem'] = ({
    item,
  }) => {
    return (
      <View style={styles.categoryWrapper} testID="home-screen">
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
    <View
      style={[styles.root, Platform.OS === 'android' && styles.rootAndroid]}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={categoriesIsLoading || questionsIsLoading}
            onRefresh={onRefresh}
          />
        }>
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
          data={questions}
          renderItem={renderQuestionItem}
          keyExtractor={item => String(item.id)}
        />

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.categoryContainer}
          data={categories.data}
          numColumns={2}
          renderItem={renderCategoryItem}
          keyExtractor={item => String(item.id)}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
