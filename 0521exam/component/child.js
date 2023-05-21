
// 자식 컴포넌트
import React, { useState } from 'react';
import { Button, Text } from 'react-native';

const ChildComponent = ({ onDataChange }) => {
  const [data, setData] = useState('');

  const handleButtonPress = () => {
    const newData = 'New Data';
    setData(newData);
    onDataChange(newData);
  };

  return (
    <>
      <Button title="Update Data" onPress={handleButtonPress} />
      <Text>{data}</Text>
    </>
  );
};

export default ChildComponent;