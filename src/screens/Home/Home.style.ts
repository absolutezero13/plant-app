import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { Metrics } from '../../theme/metrics';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white
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
  }
});
