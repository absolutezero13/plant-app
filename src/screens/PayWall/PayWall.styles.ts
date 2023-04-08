import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme/metrics';
import { colors } from '../../theme/colors';

const ORIGINAL_IMAGE_HEIGHT = 1100;
const ORIGINAL_IMAGE_WIDTH = 750;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;

const IMAGE_HEIGHT = Metrics.SCREEN_HEIGHT / 1.8;

export const styles = StyleSheet.create({
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
    marginRight: 12,
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
    marginTop: 12,
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
    marginTop: 24
  },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
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
    marginTop: 12
  },
  terms: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: 12
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
