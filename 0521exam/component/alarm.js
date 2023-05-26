import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();

    Notifications.addNotificationReceivedListener(handleNotification);
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('알림 권한이 허용되지 않았습니다.');
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('푸시 알림 토큰:', token);
  };

  const handleNotification = (notification) => {
    console.log('수신된 알림:', notification);
  };

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '테스트 알림',
        body: '이것은 테스트 알림입니다.',
      },
      trigger: null,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="알림 보내기" onPress={sendNotification} />
    </View>
  );
}
