import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { ReactNode } from 'react';

const OnBoardingContainer = ({ children }: { children: ReactNode }) => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['#fff', '#fff', '#C0F0FF1A']}
    style={{
      flex: 1
    }}
  >
    <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
  </LinearGradient>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

export default OnBoardingContainer;
