    import { StyleSheet } from "react-native";

    export const estilo = StyleSheet.create({
        cabefodase: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#212227',
            height: 85,
            paddingTop: 55,
            paddingBottom: 20,
            borderRadius: 10,
            padding: 20,
        },
        input_text: {
            backgroundColor: '#BDD4E7',
            flex: 1,
            borderRadius: 15,
            padding: 5,
            color: '#000'
        },
        icone: {
            width: 20,
            height: 20,
            marginLeft: 10,
        },
        imagem: {
            marginRight: 10,
            width: 40,
            height: 40,
            borderRadius: 20,
        }
    })