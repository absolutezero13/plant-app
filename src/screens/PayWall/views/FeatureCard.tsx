import { Text, View } from 'react-native';
import { styles } from '../PayWall.styles';
import { Feature } from '../../../utils/types';
import { colors } from '../../../theme/colors';

export const FeatureCard = ({ item }: { item: Feature }) => {
  const Icon = item.icon;
  return (
    <View style={styles.feaureCard}>
      <View style={styles.featureIcon}>
        <Icon
          style={{
            color: colors.white
          }}
        />
      </View>
      <Text style={styles.featureTitle}>{item.title}</Text>
      <Text style={styles.featureSubTitle}>{item.subTitle}</Text>
    </View>
  );
};
