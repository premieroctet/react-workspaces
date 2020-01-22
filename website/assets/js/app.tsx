import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from 'core/store';
import { getCount } from 'core/store/selectors/count';

import Count from './components/Count';

type CountState = number;

const Home = () => {
  const dispatch: any = useDispatch();
  const count: CountState = useSelector(getCount);

  const increment = () => dispatch.count.increment(1);
  const incrementAsync = () => dispatch.count.incrementAsync(1);

  return (
    <Count
      count={count}
      increment={increment}
      incrementAsync={incrementAsync}
    />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('hello-example')
);
