import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import Atendimentos from './Screen/atendimentos';
import Cadastro from './Screen/cadastro';
import Cadastro2 from './Screen/cadastro2';
import Cadastro3 from './Screen/cadastro3';
import Home from './Screen/home';
import Login from './Screen/login';

const Stack = createNativeStackNavigator();
export default function App() {
  

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Cadastro3" component={Cadastro3} />
        <Stack.Screen name="Atendimento" component={Atendimentos} />
      </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#3C9CD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
    borderRadius: 20 / 2
  },
});



