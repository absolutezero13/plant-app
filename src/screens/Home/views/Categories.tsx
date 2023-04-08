import { FlatList, Image, TextInput, View } from 'react-native';

import { styles } from '../Home.style';
import { Category } from '../../../redux/types';
import Text from '../../../components/Text';

interface CategoryProps {
  categories: Category[];
  categoryPending: boolean;
}

const Categories = ({ categories, categoryPending }: CategoryProps) => {
  const renderCategory = ({ item }: { item: Category }) => {
    return (
      <View style={styles.categoryWrapper}>
        <Image source={{ uri: item.image.url }} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{item.name}</Text>
      </View>
    );
  };

  return <FlatList data={categories} />;
};

export default Categories;
