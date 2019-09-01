import { User as UserInterface } from '../../data/user/types';

export interface WelcomeStepConfigurationCallback {
  (payload?: UserInterface): any;
}
