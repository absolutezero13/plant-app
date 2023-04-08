import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { Metrics } from '../../theme/metrics';

const ORIGINAL_IMAGE_HEIGHT = 255;
const ORIGINAL_IMAGE_WIDTH = 375;
const ASPECT_RATIO = ORIGINAL_IMAGE_WIDTH / ORIGINAL_IMAGE_HEIGHT;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FBFAFA'
  },
  headerWrapper: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    paddingTop: 10
  },
  headerTitle: {
    fontSize: 16
  },
  time: {
    fontFamily: 'Rubik-Semibold',
    fontWeight: '500',
    fontSize: 24,
    marginTop: 5
  },
  inputAreaWrapper: {},
  inputImage: {
    width: Metrics.SCREEN_WIDTH,
    position: 'absolute'
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 50,
    marginTop: 20,
    fontSize: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(60,60,67,0.25))',
    width: Metrics.SCREEN_WIDTH - Metrics.BASE_PADDING_HORIZONTAL * 2,
    alignSelf: 'center'
  },
  searchIcon: {
    color: '#ababab',
    position: 'absolute',
    top: '50%',
    left: Metrics.BASE_PADDING_HORIZONTAL + 15
  },
  freeContainer: {
    flexDirection: 'row',
    backgroundColor: '#24201A',
    marginHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30
  },
  notificationCount: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#E82C13E5',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationCountText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 12
  },
  linearTextTitle: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 16,
    marginLeft: 20
  },
  linearTextSubtitle: {
    fontFamily: 'Rubik-Regular',
    fontSize: 13,
    marginLeft: 20
  },
  arrow: {
    marginLeft: 'auto'
  },
  questionContainer: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  questionBg: {
    width: Metrics.SCREEN_WIDTH * 0.66,
    aspectRatio: ASPECT_RATIO
  },
  questionText: {
    marginBottom: 20,
    color: colors.white,
    fontWeight: '400',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 'auto'
  },
  questions: {
    marginTop: 20
  },
  questionMl: {
    marginLeft: Metrics.BASE_PADDING_HORIZONTAL
  },
  questionFlatList: {
    marginTop: 10
  },
  questionFlatListContentContainer: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL
  },
  separator: {
    width: 10
  },
  categoryWrapper: {
    width:
      (Metrics.SCREEN_WIDTH - Metrics.BASE_PADDING_HORIZONTAL * 2 - 10) / 2,
    backgroundColor: '#F4F6F6',
    height: 140,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(41,187,137, 0.2)'
  },
  categoryImage: {
    width: 120,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 10
  },
  categoryTitle: {
    fontWeight: '500',
    fontSize: 16
  },
  verticalSeparator: {
    width: 1,
    height: 10
  },
  categoryFlatList: {
    marginTop: 20
  },
  categoryFlatListContentContainer: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    paddingBottom: 40
  }
});
