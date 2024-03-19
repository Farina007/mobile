    import { View, TouchableOpacity, Text } from "react-native"
    import { estile } from "./style.jsx"   
    export default function Card(){
        return(
            <View style={estile.container}>
                <Text style={estile.texto}>
                    Pelissaco
                </Text>
                <TouchableOpacity style={estile.botao}>
                <Text style={estile.text_botao}>
                    -
                </Text>
                </TouchableOpacity>
            </View>
        )
    }