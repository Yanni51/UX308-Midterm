import { View, Text } from "react-native"
import { earthquakeDamage } from "./src/earthquake"

export default function EarthquakeTest(){
    return (
        <View>
            <Text>4.0 → {earthquakeDamage(4)}</Text>
            <Text>5.2 → {earthquakeDamage(5.2)}</Text>
            <Text>6.0 → {earthquakeDamage(6)}</Text>
            <Text>7.0 → {earthquakeDamage(7)}</Text>
            <Text>8.0 → {earthquakeDamage(8)}</Text>
        </View>
    )
}