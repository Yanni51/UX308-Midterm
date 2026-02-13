import { View, Text } from "react-native"
import { fahrenheitToCelsius } from "./src/temperature"

export default function TemperatureTest(){
    return (
        <View>
            <Text>32°F = {fahrenheitToCelsius(32)}°C</Text>
            <Text>212°F = {fahrenheitToCelsius(212)}°C</Text>
            <Text>70°F = {fahrenheitToCelsius(70)}°C</Text>
        </View>
    )
}