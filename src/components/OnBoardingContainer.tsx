import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@theme/colors';

const OnBoardingContainer = ({ children }: { children: ReactNode }) => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={[colors.white, colors.white, '#C0F0FF1A']}
    style={styles.wrapper}>
    <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
  </LinearGradient>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

export default OnBoardingContainer;
