import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>MINHA</Text>
      <hr />
      <Text>Makeup</Text>
      
      <Image source={require('../../assets/testeIcon.png')}
   style={{width: 400, height: 400}} />
      
      <Text>Santana de Parnaíba</Text>
      <Text>São Paulo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems:'center',
    justifyContent: 'center'
  },
});
