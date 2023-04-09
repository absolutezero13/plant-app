import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme/metrics';
import { colors } from '../../theme/colors';

const ORIGINAL_IMAGE_HEIGHT = 1095;
const ORIGINAL_IMAGE_WIDTH = 750;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;
const HEIGHT_REDUCTION_RATIO = 1.6;

const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / HEIGHT_REDUCTION_RATIO;

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  headerWrapper: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 20
  },
  image: {
    height: IMAGE_HEIGHT,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'Rubik-Regular',
    color: colors.primaryText,
    fontSize: 28
  },
  textBold: {
    fontWeight: '600'
  },
  description: {
    fontFamily: 'Rubik-Regular',
    color: '#13231BB3',
    fontSize: 16,
    marginTop: 12,
    lineHeight: 22,
    width: '90%'
  },
  bottomText: {
    fontFamily: 'Rubik-Regular',
    color: '#597165B2',
    marginHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 12,
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    alignSelf: 'center',
    width: '60%'
  },
  underline: {
    textDecorationLine: 'underline'
  }
});
