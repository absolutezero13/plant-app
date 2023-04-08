import { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Metrics } from '../theme/metrics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { PrimaryButton } from '../components/PrimaryButton';
import PlantWithBg from '../assets/images/plant-with-bg.png';
import Speedometer from '../assets/icons/speedometer';
import Scanner from '../assets/icons/scanner';
import Detailed from '../assets/icons/detailed';
import Cross from '../assets/icons/cross';
import badge from '../assets/images/badge.png';

const ORIGINAL_IMAGE_HEIGHT = 1100;
const ORIGINAL_IMAGE_WIDTH = 750;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;

const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / 1.8;

const features = [
  {
    icon: Scanner,
    title: 'Unlimited',
    subTitle: 'Plant Identify'
  },
  {
    icon: Speedometer,
    title: 'Faster',
    subTitle: 'Process'
  },
  {
    icon: Detailed,
    title: 'Detailed',
    subTitle: 'Plant Care'
  }
];

const plans = [
  {
    id: 0,
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    badge: false
  },
  {
    id: 1,
    title: '1 Year',
    description: 'First 3 days free, then $29.99/year',
    badge: true
  }
];

const disclaimer =
  'After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable';

const PayWall = () => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const renderCard = ({ item }) => {
    const Icon = item.icon;
    return (
      <View style={styles.feaureCard}>
        <View style={styles.featureIcon}>
          <Icon />
        </View>
        <Text style={styles.featureTitle}>{item.title}</Text>
        <Text style={styles.featureSubTitle}>{item.subTitle}</Text>
      </View>
    );
  };

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View>
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
          renderItem={renderCard}
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
          {plans.map(item => {
            const dynamicStyles = {
              borderWidth:
                selectedPlan === item.id ? 1 : StyleSheet.hairlineWidth,
              borderColor:
                selectedPlan === item.id
                  ? colors.main
                  : 'rgba(255,255,255,0.3)',
              backgroundColor:
                selectedPlan === item.id
                  ? colors.main
                  : 'rgba(255,255,255,0.15)',
              dotBackgroundColor:
                selectedPlan === item.id ? colors.white : 'transparent'
            };

            return (
              <Pressable
                onPress={() => setSelectedPlan(item.id)}
                style={[
                  styles.plan,
                  {
                    borderWidth: dynamicStyles.borderWidth,
                    borderColor: dynamicStyles.borderColor
                  }
                ]}
                key={item.title}
              >
                {item.badge && (
                  <FastImage source={badge} style={styles.badge} />
                )}
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor: dynamicStyles.backgroundColor
                    }
                  ]}
                >
                  <View
                    style={[
                      styles.whiteDot,
                      {
                        backgroundColor: dynamicStyles.dotBackgroundColor
                      }
                    ]}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10
                  }}
                >
                  <Text style={styles.planTitle}>{item.title}</Text>
                  <Text style={styles.planDesc}>{item.description}</Text>
                </View>
              </Pressable>
            );
          })}
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
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    width: '100%',
    height: IMAGE_HEIGHT
  },
  image: {
    width: Metrics.SCREEN_WIDTH,
    aspectRatio: ASPECT_RATIO,
    height: IMAGE_HEIGHT
  },
  cross: {
    alignSelf: 'flex-end',
    marginRight: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  featureContainer: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 27,
    color: colors.white
  },
  bold: {
    fontFamily: 'Rubik-Bold'
  },
  subTitle: {
    fontSize: 17,
    color: colors.white,
    marginTop: 10,
    opacity: 0.7
  },
  flatList: {
    flexGrow: 0,
    marginTop: 20
  },
  feaureCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 15,
    width: Metrics.SCREEN_WIDTH / 2.5,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  featureIcon: {
    backgroundColor: 'rgba(0,0,0,0.24)',
    borderRadius: 10,
    padding: 5,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    width: 10
  },
  featureTitle: {
    color: colors.white,
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Rubik-Bold'
  },
  featureSubTitle: {
    color: colors.white,
    fontSize: 14,
    marginTop: 5,
    opacity: 0.7
  },
  bottomPart: {
    backgroundColor: '#101E17',
    height: Metrics.SCREEN_HEIGHT - IMAGE_HEIGHT
  },
  plans: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 20
  },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  planTitle: {
    fontFamily: 'Rubik-SemiBold',
    color: colors.white,
    fontSize: 16
  },
  planDesc: {
    fontFamily: 'Rubik-Regular',
    color: colors.white,
    fontSize: 12,
    opacity: 0.7
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: -1
  },
  disclaimer: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: 10
  },
  terms: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: 10
  },
  dot: {
    height: 22,
    width: 22,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteDot: {
    height: 8,
    width: 8,
    borderRadius: 5
  }
});

export default PayWall;
