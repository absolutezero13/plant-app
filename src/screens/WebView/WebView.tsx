import WebView from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

export const WebViewPage = () => {
  const route = useRoute();

  const webViewUrl = route.params?.url;

  return <WebView source={{ uri: webViewUrl }} />;
};

export default WebViewPage;
