import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { Metrics } from '../../theme/metrics';

const ORIGINAL_IMAGE_HEIGHT = 1100;
const ORIGINAL_IMAGE_WIDTH = 750;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;
const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / 1.5;

export const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0
  },
  item: {
    width: Metrics.SCREEN_WIDTH
  },
  headerWrapper: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  text: {
    fontFamily: 'Rubik-SemiBold',
    color: colors.primaryText,
    fontSize: 28
  },
  textBold: {
    fontFamily: 'Rubik-Bold'
  },
  image: {
    justifyContent: 'flex-end',
    height: IMAGE_HEIGHT,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center'
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 5,
    marginTop: 20
  },
  dot: {
    borderRadius: 15,
    backgroundColor: '#13231B40',
    marginRight: 5
  }
});
