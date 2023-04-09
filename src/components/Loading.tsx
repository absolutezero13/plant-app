import { Image } from 'react-native';
import LoadingImage from '@assets/images/loading.gif';

export const Loading = () => {
  return (
    <Image
      resizeMode="contain"
      source={LoadingImage}
      style={{
        width: 35,
        height: 35
      }}
    />
  );
};
