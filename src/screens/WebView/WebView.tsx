import WebView from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteProps = {
  params: {
    url: string;
    title: string;
  };
};

export const WebViewPage = () => {
  const route = useRoute<RouteProp<RouteProps, 'params'>>();
  const webViewUrl = route.params?.url;

  return <WebView source={{ uri: webViewUrl }} />;
};

export default WebViewPage;
