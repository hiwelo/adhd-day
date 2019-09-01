import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';

const DevelopmentMode = () => {
  useKeepAwake();

  return <></>;
};

export default DevelopmentMode;
