import { FlatList, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { styles } from '../Home.style';
import { Category } from '../../../redux/types';
import Text from '../../../components/Text';
import { Loading } from '../../../components/Loading';

interface CategoryProps {
  categories: Category[];
  categoryPending: boolean;
}

const Categories = ({ categories, categoryPending }: CategoryProps) => {
  const renderCategory = ({
    item,
    index
  }: {
    item: Category;
    index: number;
  }) => {
    const aspectRatio = item.image.width / item.image.height;

    return (
      <TouchableOpacity
        style={[
          styles.categoryWrapper,
          {
            marginLeft: index % 2 === 0 ? 0 : 10
          }
        ]}
        activeOpacity={0.8}>
        <FastImage
          source={{ uri: item.image.url }}
          style={[
            styles.categoryImage,
            {
              height: 120 * aspectRatio
            }
          ]}
        />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const Separator = () => <View style={styles.verticalSeparator} />;

  if (categoryPending)
    return (
      <View style={styles.loading}>
        <Loading />
      </View>
    );

  return (
    <FlatList
      style={styles.categoryFlatList}
      contentContainerStyle={styles.categoryFlatListContentContainer}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      numColumns={2}
      data={categories}
      renderItem={renderCategory}
    />
  );
};

export default Categories;
