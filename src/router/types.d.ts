import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnBoardingStackParamList = {
  OnBoarding: undefined;
  Welcome: undefined;
  PayWall: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  TabStack: undefined;
  OnBoardingStack: undefined;
  Welcome: undefined;
  WebView: { title: string; url: string };
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type OnBoardingNavigationProp = NativeStackNavigationProp<
  OnBoardingStackParamList
>;
