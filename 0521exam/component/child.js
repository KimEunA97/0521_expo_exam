
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

  //onPress : 버튼 누르면 handleButtonPress 함수 실행

  return (
    <>
      <Button title="Update Data" onPress={handleButtonPress} />
      <Text>{data}</Text>
    </>
  );
};

export default ChildComponent;