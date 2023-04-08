import React from 'react';
import RootNavigation from './router/RootNavigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
