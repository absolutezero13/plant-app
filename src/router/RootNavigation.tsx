import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingStack } from './OnBoardingStack';
import Welcome from '../screens/Welcome/Welcome';
import { TabStack } from './TabNavigator';
import WebView from '../screens/WebView/WebView';
import { colors } from '../theme/colors';
import { STORAGE_KEYS, storage } from '../providers/storage';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const userSeenOnBoarding = storage.getBoolean(
    STORAGE_KEYS.USER_SEEN_ONBOARDING
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={userSeenOnBoarding ? 'TabStack' : 'Welcome'}>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'fade'
          }}
          name="TabStack"
          component={TabStack}
        />
        <Stack.Screen
          options={({ route }) => ({
            headerTitle: route.params?.title,
            headerTintColor: colors.main
          })}
          name="WebView"
          component={WebView}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="OnBoardingStack"
          component={OnBoardingStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
