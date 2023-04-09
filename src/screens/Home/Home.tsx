import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '@components/Text';
import useHomeData from '@hooks/useHomeData';

import { styles } from './Home.style';
import InputArea from './views/InputArea';
import FreePremium from './views/FreePremium';
import Questions from './views/Questions';
import Categories from './views/Categories';

const getTimeText = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12 && hours > 5) {
    return 'Good morning! ☀️';
  }
  if (hours < 18 && hours > 12) {
    return 'Good afternoon! 🌥';
  }
  return 'Good evening! 🌙';
};

const Home = () => {
  const { categories, categoryPending, questions, questionsPending } =
    useHomeData();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Hi, plant lover!</Text>
          <Text style={styles.time}>{getTimeText()}</Text>
        </View>
        <InputArea />
        <FreePremium />
        <Questions questions={questions} questionsPending={questionsPending} />
        <Categories categories={categories} categoryPending={categoryPending} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
