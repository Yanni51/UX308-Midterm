import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { CoinsTest } from './Coins.jsx';

import {
  View,
} from 'react-native';
import CubeTest from './Cube.jsx';
import GymTest from './Gym.jsx';
import TemperatureTest from './Temperature.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <CoinsTest></CoinsTest>
      <CubeTest></CubeTest>
      <EarthquaqeTest></EarthquaqeTest>
      <GymTest></GymTest>
      <TemperatureTest></TemperatureTest>
    </View>
  );
}

