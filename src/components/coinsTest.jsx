import { View, Text } from "react-native"
import { coinTotal } from "./src/coins"

export default function CoinsTest(){
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Coin Total</Text>
            <Text>1 of each = ${coinTotal(1,1,1,1,1)}</Text>
            <Text>2 of each = ${coinTotal(2,2,2,2,2)}</Text>
            <Text>All zero = ${coinTotal(0,0,0,0,0)}</Text>
        </View>
    )
}