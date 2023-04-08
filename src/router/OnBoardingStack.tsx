import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import OnBoarding from '../screens/OnBoarding';

const Stack = createNativeStackNavigator();

export const OnBoardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name='OnBoarding'
        component={OnBoarding}
      />
    </Stack.Navigator>
  );
};
