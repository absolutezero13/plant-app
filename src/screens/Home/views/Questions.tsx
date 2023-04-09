import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View
} from 'react-native';
import Text from '@components/Text';
import { Question } from '@redux/types';
import { useNavigation } from '@react-navigation/native';
import { Loading } from '@components/Loading';
import { styles } from '../Home.style';
import { RootNavigationProp } from '../../../router/types';

interface QuestionsProps {
  questions: Question[];
  questionsPending: boolean;
}

const Questions = ({ questions, questionsPending }: QuestionsProps) => {
  const navigation = useNavigation<RootNavigationProp>();

  const renderItem = ({ item }: { item: Question }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('WebView', {
            url: item.uri,
            title: item.title
          })
        }
        style={styles.questionContainer}
        activeOpacity={0.8}>
        <ImageBackground
          source={{ uri: item.image_uri }}
          style={styles.questionBg}>
          <Text style={styles.questionText}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const Separator = () => <View style={styles.separator} />;

  if (questionsPending)
    return (
      <View style={styles.loading}>
        <Loading />
      </View>
    );

  return (
    <View style={styles.questions}>
      <Text style={styles.questionMl}>Get started</Text>
      <FlatList
        data={questions}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.questionFlatListContentContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.questionFlatList}
        horizontal
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Questions;
