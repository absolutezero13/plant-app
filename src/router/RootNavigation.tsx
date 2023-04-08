import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingStack } from './OnBoardingStack';
import Welcome from '../screens/Welcome/Welcome';
import { TabStack } from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Welcome'
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='OnBoardingStack'
          component={OnBoardingStack}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
          name='TabStack'
          component={TabStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
