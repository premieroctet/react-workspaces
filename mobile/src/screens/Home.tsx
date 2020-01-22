import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCount } from 'core/store/selectors/count';

import Count from '../components/Count';

type CountState = number;

const Home = () => {
  const dispatch: any = useDispatch();
  const count: CountState = useSelector(getCount);

  const increment = () => dispatch.count.increment(1);
  const incrementAsync = () => dispatch.count.incrementAsync(1);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Count
        count={count}
        increment={increment}
        incrementAsync={incrementAsync}
      />
    </View>
  );
};

export default Home;
