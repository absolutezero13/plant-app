import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Metrics } from '../../theme/metrics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { PrimaryButton } from '../../components/PrimaryButton';
import PlantWithBg from '../../assets/images/plant-with-bg.png';
import Cross from '../../assets/icons/cross.svg';
import badge from '../../assets/images/badge.png';
import { features, plans } from '../../utils/uiData';
import { styles } from './PayWall.styles';
import { FeatureCard } from './views/FeatureCard';
import { Plan } from './views/Plan';

const disclaimer =
  'After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable';

const PayWall = () => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <>
      <ImageBackground
        resizeMode='cover'
        source={PlantWithBg}
        style={styles.image}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.cross}>
          <Cross />
        </View>
        <View style={styles.featureContainer}>
          <Text style={styles.title}>
            <Text style={styles.bold}>Plant App</Text> Premium
          </Text>
          <Text style={styles.subTitle}>Access All Features</Text>
        </View>
        <FlatList
          data={features}
          renderItem={FeatureCard}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          style={styles.flatList}
          contentContainerStyle={{
            paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL
          }}
        />
      </SafeAreaView>
      <View style={styles.bottomPart}>
        <View style={styles.plans}>
          {plans.map(item => (
            <Plan
              key={item.title}
              item={item}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          ))}
          <PrimaryButton
            onPress={() => {}}
            title='Try Free For 3 Days'
            style={{
              marginTop: 20
            }}
          />
          <Text style={styles.disclaimer}>{disclaimer}</Text>
          <Text style={styles.terms}>Terms • Privacy • Restore</Text>
        </View>
      </View>
    </>
  );
};

export default PayWall;
