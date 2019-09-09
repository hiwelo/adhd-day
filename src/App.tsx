import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'styled-components/native';

import { BaseRoutes } from './routes';
import { store, persistor } from './store';
import theme from './theme';
import { DevelopmentMode } from './components';

const NavigationContainer = createAppContainer(BaseRoutes);

const App = () => (
  <>
    {__DEV__ && <DevelopmentMode />}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
);

export default App;
