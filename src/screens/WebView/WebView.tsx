import WebView from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../router/types';

export const WebViewPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'WebView'>>();
  const webViewUrl = route.params?.url;

  return <WebView source={{ uri: webViewUrl }} />;
};

export default WebViewPage;
