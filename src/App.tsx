import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createAppContainer } from "react-navigation";

import routes from './routes';
import { store, persistor } from './store';
import { HomeScreen } from './views';

const AppContainer = createAppContainer(routes);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeScreen />
    </PersistGate>
  </Provider>
);

export default App;
