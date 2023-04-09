import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@theme/colors';
import badge from '@assets/images/badge.png';
import { TPlan } from '@utils/types';
import { styles } from '../PayWall.styles';

interface PlanProps {
  item: TPlan;
  selectedPlan: number;
  setSelectedPlan: (id: number) => void;
}

export const Plan = ({ item, selectedPlan, setSelectedPlan }: PlanProps) => {
  const dynamicStyles = {
    borderWidth: selectedPlan === item.id ? 1 : StyleSheet.hairlineWidth,
    borderColor:
      selectedPlan === item.id ? colors.main : 'rgba(255,255,255,0.3)',
    backgroundColor:
      selectedPlan === item.id ? colors.main : 'rgba(255,255,255,0.15)',
    dotBackgroundColor: selectedPlan === item.id ? colors.white : 'transparent'
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
      key={item.title}>
      {item.badge && <Image source={badge} style={styles.badge} />}
      <View
        style={[
          styles.dot,
          {
            backgroundColor: dynamicStyles.backgroundColor
          }
        ]}>
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
        }}>
        <Text style={styles.planTitle}>{item.title}</Text>
        <Text style={styles.planDesc}>{item.description}</Text>
      </View>
    </Pressable>
  );
};
