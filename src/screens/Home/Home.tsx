import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '../../components/Text';
import { styles } from './Home.style';
import InputArea from './views/InputArea';
import FreePremium from './views/FreePremium';

const getTimeText = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12 && hours > 5) {
    return 'Good morning! ☀️';
  }
  if (hours < 18) {
    return 'Good afternoon! 🌥';
  }
  return 'Good evening! 🌙';
};

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Hi, plant lover!</Text>
        <Text style={styles.time}>{getTimeText()}</Text>
      </View>
      <InputArea />
      <FreePremium />
    </SafeAreaView>
  );
};

export default Home;
