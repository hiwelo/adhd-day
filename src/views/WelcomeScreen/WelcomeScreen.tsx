import React from 'react';
import { useDispatch } from 'react-redux';

import { WelcomeView } from './components';
import { ScreenPropsInterface } from '../../common/types';
import { WelcomeStep } from '../../components';
import { setUser } from '../../data/user/actions';
import { User } from '../../data/user/types';

const WelcomeScreen = ({ navigation }: ScreenPropsInterface) => {
  const dispatch = useDispatch();

  const onSubmit = (values: User) => {
    if (!values.name) return;

    dispatch(setUser(values));
    navigation.navigate('Home');
  };

  return (
    <>
      <WelcomeView>
        <WelcomeStep onSubmit={onSubmit} />
      </WelcomeView>
    </>
  );
};

WelcomeScreen.navigationOptions = {
  headerMode: 'none',
};

export default WelcomeScreen;
