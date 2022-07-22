import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login(){ 
    return(
        <View>
            <View  style={ styles.login }>
                <Text style={ styles.text}>Login</Text>
            </View>
            <View> 
                <TextInput  style= { styles.input}>   CPF</TextInput>
                <TextInput  style= { styles.input}>   Senha</TextInput>
               
            </View>
            <View>
            <Button
                title="Login"
                color= '#3C9CD2'
                style= { styles.buttonLogin}
                
            />
            <Button
                title="Recuperar senha"
                color= '#D9D9D9'
                style={ styles.textButtonRecuperar}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#3C9CD2',
        fontSize: 30 ,
        margin: 30,
        fontStyle: 'italic',
        
    },
    login: {
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    input:{
        fontSize: 14,
        backgroundColor: '#D9D9D9',
        borderRadius: 60,
        margin: 10,
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D9D9D9',
        
    },
    // buttonLogin: {
    //     width:"100%",
    //     alignContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 14,
    //     borderColor: '#3C9CD2',
    // },
    // textButtonRecuperar:{
    //     fontSize: 20,
    //     color: '#3C9CD2',
    // }
})