import React from 'react';
import { Container, Message } from './components';

const HomeScreen = () => {
  return (
    <Container>
      <Message>Open up App.tsx to start working on your app!</Message>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  title: 'ADHDay',
};

export default HomeScreen;
