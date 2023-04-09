import { Pressable, View } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import Text from '@components/Text';

import Notification from '@assets/icons/notification.svg';
import Arrow from '@assets/icons/arrow.svg';
import { styles } from '../Home.style';

const FreePremium = () => {
  return (
    <Pressable style={styles.freeContainer}>
      <View>
        <Notification />
        <View style={styles.notificationCount}>
          <Text style={styles.notificationCountText}>1</Text>
        </View>
      </View>
      <View>
        <LinearGradientText
          colors={['#E6C990', '#E4B046']}
          text="FREE Premium Available"
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.linearTextTitle}
        />
        <LinearGradientText
          colors={['#E6C990', '#E4B046']}
          text="Tap to upgrade your account!"
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.linearTextSubtitle}
        />
      </View>
      <Arrow style={styles.arrow} />
    </Pressable>
  );
};

export default FreePremium;
