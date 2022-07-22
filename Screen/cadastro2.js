import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Cadastro2() {
    return(
        <View>
            <Text style={ styles.cadastro2}>Endereço</Text>
            <View> 
                <TextInput  style= { styles.input}>Rua</TextInput>
                <TextInput  style= { styles.input}>Número</TextInput>
                <TextInput  style= { styles.input}>Bairro</TextInput>
                <TextInput  style= { styles.input}>Cidade</TextInput>
                <TextInput  style= { styles.input}>Estado</TextInput>
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
    cadastro2: {
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