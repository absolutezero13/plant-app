import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InitialOnboarding from './../assets/images/initial-onboarding.png';
import FastImage from 'react-native-fast-image';
import { Metrics } from '../theme/metrics';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';
import OnBoardingContainer from '../components/OnBoardingContainer';

const ORIGINAL_IMAGE_HEIGHT = 500;
const ORIGINAL_IMAGE_WIDTH = 375;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;
const HEIGHT_REDUCTION_RATIO = 1.6;

const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / HEIGHT_REDUCTION_RATIO;

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <OnBoardingContainer>
      <View style={styles.headerWrapper}>
        <Text style={styles.text}>
          Welcome to
          <Text style={styles.textBold}> PlantApp</Text>
        </Text>
        <Text style={styles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <FastImage style={styles.image} source={InitialOnboarding} />
      <PrimaryButton
        onPress={() => navigation.navigate('OnBoardingStack')}
        title='Get Started'
      />
      <Text style={styles.bottomText}>
        By tapping next, you are agreeing to PlantID
        <Text style={styles.underline}> Terms of Use</Text> &
        <Text style={styles.underline}> Privacy Policy.</Text>
      </Text>
    </OnBoardingContainer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  headerWrapper: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  image: {
    height: IMAGE_HEIGHT,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'Rubik-Regular',
    color: colors.primaryText,
    fontSize: 28
  },
  textBold: {
    fontFamily: 'Rubik-Bold'
  },
  description: {
    fontFamily: 'Rubik-Regular',
    color: '#13231BB3',
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22
  },
  bottomText: {
    fontFamily: 'Rubik-Regular',
    color: '#597165B2',
    marginHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 10,
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    alignSelf: 'center',
    width: '60%'
  },
  underline: {
    textDecorationLine: 'underline'
  }
});

export default Welcome;
