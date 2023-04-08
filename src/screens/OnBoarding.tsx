import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import OnBoardingContainer from '../components/OnBoardingContainer';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';
import Onboarding1 from '../assets/images/onboarding-1.png';
import Onboarding2 from '../assets/images/onboarding-2.png';
import { Metrics } from '../theme/metrics';

const ORIGINAL_IMAGE_HEIGHT = 1100;
const ORIGINAL_IMAGE_WIDTH = 750;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;

const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / 1.5;

const onBoardingData = [
  {
    id: 0,
    titleStart: 'Take a photo to ',
    titleBold: 'identify',
    titleEnd: ' the plant!',
    image: Onboarding1,
    onPress: () => {}
  },
  {
    id: 1,
    titleStart: 'Get plant ',
    titleBold: 'care guides',
    titleEnd: ' and tips!',
    image: Onboarding2,
    onPress: () => {}
  },
  {
    id: 2
  }
];

const OnBoarding = () => {
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    flatListRef?.current?.scrollToIndex({ index: step });
  }, [step]);

  const renderItem = ({ item }) => {
    if (!item.image) return null;
    return (
      <View
        style={{
          width: Metrics.SCREEN_WIDTH
        }}
      >
        <View style={styles.headerWrapper}>
          <Text style={styles.text}>
            {item.titleStart}
            <Text style={styles.textBold}>{item.titleBold} </Text>
            {item.titleEnd}
          </Text>
        </View>
        <FastImage source={item.image} style={styles.image} />
      </View>
    );
  };

  // const onViewableItemsChanged = useCallback(({ viewableItems }) => {
  //   if (viewableItems?.[0] === undefined) return;
  //   setStep(viewableItems[0].index);
  // }, []);

  return (
    <OnBoardingContainer>
      <FlatList
        ref={flatListRef}
        data={onBoardingData}
        horizontal
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Metrics.SCREEN_WIDTH}
        scrollEnabled={false}
        style={styles.flatList}
        // onViewableItemsChanged={onViewableItemsChanged}
        decelerationRate='fast'
        renderItem={renderItem}
      />

      <PrimaryButton
        title='Continue'
        onPress={() => {
          if (step === 1) {
            navigation.navigate('Home');
            return;
          }
          setStep(step => step + 1);
        }}
      />
      <View>
        <View style={styles.dots}>
          {onBoardingData.map(item => (
            <View
              key={item.id.toString()}
              style={[
                styles.dot,
                {
                  backgroundColor: item.id === step ? '#13231B' : '#13231B40',
                  width: item.id === step ? 10 : 6,
                  height: item.id === step ? 10 : 6
                }
              ]}
            />
          ))}
        </View>
      </View>
    </OnBoardingContainer>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0
  },
  headerWrapper: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  text: {
    fontFamily: 'Rubik-SemiBold',
    color: colors.primaryText,
    fontSize: 28
  },
  textBold: {
    fontFamily: 'Rubik-Bold'
  },
  image: {
    justifyContent: 'flex-end',
    height: IMAGE_HEIGHT,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center'
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 5,
    marginTop: 20
  },
  dot: {
    borderRadius: 15,
    backgroundColor: '#13231B40',
    marginRight: 5
  }
});

export default OnBoarding;
