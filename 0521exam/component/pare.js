// 부모 컴포넌트
import React from 'react';
import { View, Text } from 'react-native';
import ChildComponent from './child';

const ParentComponent = () => {
  const handleDataChange = (data) => {
    console.log('Received data:', data);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChildComponent onDataChange={handleDataChange} />
    </View>
  );
};

export default ParentComponent;
