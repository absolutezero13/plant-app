import { useEffect, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import OnBoardingContainer from '../../components/OnBoardingContainer';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Metrics } from '../../theme/metrics';
import { onBoardingData } from '../../utils/uiData';
import { styles } from './OnBoarding.style';
import { OnBoardingData } from '../../utils/types';
import Brush from '../../assets/images/brush.png';
import { OnBoardingNavigationProp } from '../../router/types';

const OnBoarding = () => {
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<OnBoardingNavigationProp>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    flatListRef?.current?.scrollToIndex({ index: step });
  }, [step]);

  const renderItem = ({
    item,
    index
  }: {
    item: OnBoardingData;
    index: number;
  }) => {
    if (!item.image) return null;
    return (
      <View style={styles.item}>
        <View style={styles.headerWrapper}>
          <Text style={styles.text}>
            {item.titleStart}
            <Text style={styles.textBold}>{item.titleBold}</Text>
            {item.titleEnd}
          </Text>
          <Image
            source={Brush}
            style={[
              styles.brush,
              {
                right: index === 0 ? 50 : 80
              }
            ]}
          />
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  // const onViewableItemsChanged = useCallback(({ viewableItems }) => {
  //   if (viewableItems?.[0] === undefined) return;
  //   setStep(viewableItems[0].index);
  // }, []);

  return (
    <OnBoardingContainer>
      <FlatList
        ref={flatListRef}
        data={onBoardingData}
        horizontal
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Metrics.SCREEN_WIDTH}
        scrollEnabled={false}
        style={styles.flatList}
        // onViewableItemsChanged={onViewableItemsChanged}
        decelerationRate='fast'
        renderItem={renderItem}
      />
      <PrimaryButton
        title='Continue'
        onPress={() => {
          if (step === 1) {
            navigation.navigate('PayWall');
            return;
          }
          setStep(step => step + 1);
        }}
      />
      <View>
        <View style={styles.dots}>
          {onBoardingData.map(item => (
            <View
              key={item.id.toString()}
              style={[
                styles.dot,
                {
                  backgroundColor: item.id === step ? '#13231B' : '#13231B40',
                  width: item.id === step ? 10 : 6,
                  height: item.id === step ? 10 : 6
                }
              ]}
            />
          ))}
        </View>
      </View>
    </OnBoardingContainer>
  );
};

export default OnBoarding;
