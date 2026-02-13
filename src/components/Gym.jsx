import { View, Text } from "react-native"
import { gymCost } from "../gym.js"

export default function GymTest(){
    return (
        <View>
        <Text>0 friends: ${gymCost(100,0)}</Text>
            <Text>1 friend: ${gymCost(100,1)}</Text>
            <Text>2 friends: ${gymCost(100,2)}</Text>
            <Text>3 friends: ${gymCost(100,3)}</Text>
            <Text>4 friends: ${gymCost(100,4)}</Text>
    </View>
    )
}