import { Button, Text, View } from "react-native";

export default function HomeScreen(){
    return(
        <View>
            <Text>Login</Text>
            <Button
            title="Login"
            color="#3C9CD2"
            />

            <Button
            title="Criar Conta"
            color="#3C9CD2"
            />
        </View>
    );
}