import { StyleSheet } from "react-native";

export const estile = StyleSheet.create({
    container : {
        marginTop: 30,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#52B2CF',
        borderRadius: 10,
    },
    texto: {
        padding: 12,
        flex: 1,
        fontSize: 20,
        color: '#000000',
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        fontSize: 20,
        backgroundColor: '#520000',
        borderRadius: 10,
        marginLeft: 5
    },
    text_botao: {
        fontSize: 30,
        color: '#000000'
    }
})