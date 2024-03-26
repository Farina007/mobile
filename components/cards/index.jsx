    import { View, TextInput, TouchableOpacity, Image } from "react-native"
    import { estilo} from "./style"

    export default function Card(){
        return(
            <View style={estilo.cabefodase}>
                <Image
                style={estilo.imagem}
                source={require('../../assets/imagemsite.jpeg')}
                />

                <TextInput style={estilo.input_text}/>

                <TouchableOpacity style={estilo.botao}>
                    <Image
                    style={estilo.icone}
                    source={require('../../assets/lupa.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }