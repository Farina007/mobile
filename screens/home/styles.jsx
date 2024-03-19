  import { StyleSheet } from "react-native";

  export const estilo = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: '#004777',
      padding: 22
    },
    titulo: {
      marginTop: 30,
      fontSize: 36,
      fontWeight: 'bold'
    },
    subtitulo: {
      fontSize: 26,
      color: "#252424",
    },
    form: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 16,
    },
    input_text: {
      flex: 1,
      height: 80,
      color: '#FFF',
      fontSize: 22,
      padding: 12,
      borderRadius: 10,
      backgroundColor: '#424242',
      marginRight: 5,
    },
    botao: {
      width: 56,
      borderRadius: 10,
      fontSize: 50,
      backgroundColor: '#00023D',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 25,
    }
  })