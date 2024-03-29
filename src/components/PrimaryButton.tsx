import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '@theme/colors';
import { Metrics } from '@theme/metrics';

interface PrimaryButtonProps {
  bgColor?: string;
  textColor?: string;
  onPress: () => void;
  title: string;
  style?: any;
}

const { SCREEN_WIDTH, BASE_PADDING_HORIZONTAL } = Metrics;

const PrimaryButton = ({
  bgColor,
  textColor,
  onPress,
  title,
  style
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: bgColor || colors.main, ...style }
      ]}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH - BASE_PADDING_HORIZONTAL * 2,
    alignSelf: 'center',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  buttonText: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16
  }
});

export { PrimaryButton };
