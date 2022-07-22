import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Cadastro( { navigation }) {
    return(
        <View>
            <Text style={ styles.cadastro}>Dados Pessoas</Text>
            <View> 
                <TextInput  style= { styles.input}>   CPF</TextInput>
                <TextInput  style= { styles.input}>   Nome</TextInput>
                <TextInput  style= { styles.input}>   Data de Nascimento</TextInput>
                <TextInput  style= { styles.input}>   Telefone</TextInput>
            </View>
            <View>
            <Button
            title="Próximo"
            color="#3C9CD2"
            onPress={() =>
                navigation.navigate('Cadastro2', { name: 'Cadastro2' })
            }
            /> 
            </View>
        </View>
    )
}

function Cadastro2({ navigation, route }) {
    return <Text>This is {route.params.cadastro2}'s profile</Text>;
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20 ,
        margin: 10,
        
    },
    cadastro: {
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