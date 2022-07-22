import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Cadastro3() {
    return(
        <View>
            <Text style={ styles.cadastro3}>Endereço</Text>
            <View> 
                <TextInput  style= { styles.input}>Senha</TextInput>
                <TextInput  style= { styles.input}>Confirmar senha</TextInput>
                
            </View>
            <View>
            <Button
            title="Próximo"
            color="#3C9CD2"
            />
           
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20 ,
        margin: 10,
        
    },
    cadastro3: {
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    input:{
        fontSize: 14,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        margin: 10,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D9D9D9',
        
    },
})