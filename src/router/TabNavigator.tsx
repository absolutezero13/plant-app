import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home/Home';
import Text from '@components/Text';
import { colors } from '@theme/colors';

import HomeIcon from '@assets/icons/home.svg';
import MyGarden from '@assets/icons/my-garden.svg';
import Scanner from '@assets/icons/scanner.svg';
import Profile from '@assets/icons/profile.svg';
import HealthCare from '@assets/icons/healthcare.svg';

const routes = {
  Home: { icon: HomeIcon },
  MyGarden: { icon: MyGarden, name: 'My Garden' },
  Scanner: { icon: Scanner },
  Profile: { icon: Profile },
  Diagnose: { icon: HealthCare }
};

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ focused }) =>
          route.name !== 'Scanner' ? (
            <Text
              style={{
                color: focused ? colors.main : '#BDBDBD',
                fontSize: 10
              }}>
              {routes[route.name].name || route.name}
            </Text>
          ) : null,
        tabBarIcon: ({ focused }) => {
          const Icon = routes[route.name].icon;
          const color = focused ? colors.main : '#BDBDBD';

          if (route.name !== 'Scanner') {
            return (
              <Icon
                style={{
                  color
                }}
              />
            );
          }

          return (
            <View style={styles.scannerContainer}>
              <Icon
                width={30}
                height={30}
                style={{
                  color: '#fff'
                }}
              />
            </View>
          );
        }
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diagnose" component={Home} />
      <Tab.Screen name="Scanner" component={Home} />
      <Tab.Screen name="MyGarden" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scannerContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main,
    borderRadius: 50,
    marginBottom: 30,
    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  }
});

export { TabStack };
