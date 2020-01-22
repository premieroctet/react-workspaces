import React, { memo } from 'react';
import { Button, Text, View } from 'react-native';

type CountProps = {
  count: number;
  increment: () => void;
  incrementAsync: () => void;
};

const Count = ({ count, increment, incrementAsync }: CountProps) => {
  return (
    <View style={{ flex: 0, justifyContent: 'center' }}>
      <Text>The count is {count}</Text>
      <Button onPress={increment} title="increment" />
      <Button onPress={incrementAsync} title="incrementAsync" />
    </View>
  );
};

export default memo(Count);
