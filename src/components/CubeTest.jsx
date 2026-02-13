import { View, Text } from "react-native"
import { cubeVolume } from "../cube.js"

export function CubeTest(){
    return (
        <View>
            <Text>2m cube = {cubeVolume(2)} m³</Text>
            <Text>3m cube = {cubeVolume(3)} m³</Text>
            <Text>5m cube = {cubeVolume(5)} m³</Text>
        </View>
    )
}
