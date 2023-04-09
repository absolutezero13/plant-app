import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InitialOnboarding from './../../assets/images/initial-onboarding.png';
import { PrimaryButton } from '../../components/PrimaryButton';
import OnBoardingContainer from '../../components/OnBoardingContainer';
import { styles } from './Welcome.styles';
import { RootNavigationProp } from '../../router/types';

const Welcome = () => {
  const navigation = useNavigation<RootNavigationProp>();

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
      <Image style={styles.image} source={InitialOnboarding} />
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

export default Welcome;
