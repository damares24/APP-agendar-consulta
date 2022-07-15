import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/homeScreen';

export default function App() {
  const [homeScreen, setHomeScreen] = useState()
  return (
    <View style={styles.container}> 
   
     <Image source={require('./img/psf.png')}  
     style = { styles.logo }
      />

    {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#3C9CD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
    borderRadius: 20 / 2
  },
});
