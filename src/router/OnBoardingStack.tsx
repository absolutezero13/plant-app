import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@screens/OnBoarding/OnBoarding';
import PayWall from '@screens/PayWall/PayWall';

const Stack = createNativeStackNavigator();

export const OnBoardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="OnBoarding"
        component={OnBoarding}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="PayWall"
        component={PayWall}
      />
    </Stack.Navigator>
  );
};
