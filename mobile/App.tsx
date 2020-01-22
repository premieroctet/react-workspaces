import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'core/store';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
