import { Button, View } from "react-native";

export default function Home( { navigation } ){
    return(
        <View >
            <View>
            <Button 
            title="Login"
            color="#3C9CD2"
            onPress={() =>
                navigation.navigate('Login', { name: 'Login' })
            }
            />
            
            <Button
            title="Criar Conta"
            color="#3C9CD2"
            onPress={() =>
                navigation.navigate('Cadastro', { name: 'Cadastro' })
            }
            />
            
        </View>
            
    </View>
    );
};
function Cadastro({ navigation, route }) {
    return <Text>This is {route.params.cadastro}'s profile</Text>;
}