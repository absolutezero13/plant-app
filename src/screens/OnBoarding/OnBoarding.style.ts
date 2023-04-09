import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { Metrics } from '../../theme/metrics';

const ORIGINAL_IMAGE_HEIGHT = 1100;
const ORIGINAL_IMAGE_WIDTH = 750;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;
const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / 1.5;
const IMAGE_WIDTH = IMAGE_HEIGHT * ASPECT_RATIO;

export const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0
  },
  item: {
    width: Metrics.SCREEN_WIDTH,
    flex: 1
  },
  headerWrapper: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 24
    // width: '90%'
  },
  text: {
    fontWeight: '600',
    color: colors.primaryText,
    fontSize: 28
  },
  textBold: {
    fontWeight: '900'
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: 24
  },
  brush: {
    width: 138,
    height: 12,
    position: 'absolute',
    top: 42
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 5,
    marginTop: 24
  },
  dot: {
    borderRadius: 15,
    backgroundColor: '#13231B40',
    marginRight: 5
  }
});
