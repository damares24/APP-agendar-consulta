import { Button, Text, View } from "react-native";

export default function Atendimentos(){
    return(
        <View>
            <Text>Atendimentos</Text>
            <View>
            <Button
            title="Médico"
            color="#3C9CD2"
            />

            <Button
            title="Enfermeira"
            color="#3C9CD2"
            />

            <Button
            title="Dentista"
            color="#3C9CD2"
            />
            </View>
        </View>
    )
}