import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from './src/views';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
