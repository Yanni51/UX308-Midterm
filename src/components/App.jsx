import { View } from 'react-native';
import {Hello} from './Hello.jsx';
import {SnowRemoval} from './SnowRemoval.jsx';
import {CoinsTest} from './CoinsTest.jsx';
import {CubeTest} from './CubeTest.jsx';
import {GymTest} from './GymTest.jsx';
import {TemperatureTest} from './TemperatureTest.jsx';
import {EarthquakeTest} from './EarthquakeTest.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <CoinsTest />
      <CubeTest />
      <EarthquakeTest />
      <GymTest />
      <TemperatureTest />
    </View>
  );
}
