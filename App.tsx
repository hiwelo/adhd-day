import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text``;

export default function App() {
  return (
    <Container>
      <Message>Open up App.tsx to start working on your app!</Message>
    </Container>
  );
}
