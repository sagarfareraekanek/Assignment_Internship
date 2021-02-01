import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import MoveScreen from './src/screens/MoveHistory';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Move: MoveScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Tic Tac Toe',
    },
  }
);

export default createAppContainer(navigator);
