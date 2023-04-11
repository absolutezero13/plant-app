import { Image, StyleSheet } from 'react-native';
import LoadingImage from '@assets/images/loading.gif';

export const Loading = () => {
  return (
    <Image resizeMode="contain" source={LoadingImage} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35
  }
});
