import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function Splash() {
  const [loaded] = useFonts({
    nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf')
  });


  return (



    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.minha}>MINHA</Text>
      <hr style={styles.line} />
      <Text style={styles.makeUp}>Makeup</Text>

      <Image source={require('../../assets/testeIcon.png')}
        style={styles.logo} />

      <Text style={styles.santanaParnaiba}>Santana de Parnaíba</Text>
      <Text style={styles.saoPaulo}>São Paulo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
  minha: {
    fontFamily: 'Montserrat',
    fontSize: 48,
    letterSpacing: '10px',
    lineHeight: 30,
    color: '#EFCFE3',
    textShadowColor: '#0000', textShadowOffset: { width: '0px', height: '4px', blur: '4px' },
    opacity: 0.98



  },
  makeUp: {
    fontFamily: 'nunito',
    fontSize: 40,
    color: '#E0678B',
    textShadowColor: '#0000', textShadowOffset: { width: 0, height: 4, blur: 4 },
    lineHeight: 30,
    marginTop: '5px',
    marginBottom: '50px'
  },
  santanaParnaiba: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: '#FFFF',
    marginTop: '90px',

    lineHeight: 30,
  },
  saoPaulo: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#FFFF',
    lineHeight: 30,

  },
  line: {
    color: '#EAF2D7',
    width: '300px',
    marginTop: '17px',
    textShadowColor: '#0000', textShadowOffset: { width: 0, height: 4, blur: 4 },
  },
  logo: {
    width: 259,
    height: 259,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,

    elevation: 1,


  }
});
