import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation,Link } from '@react-navigation/native';
import { Card, Avatar, Icon, Button } from '@rneui/themed';
import { useFonts } from 'expo-font';

import ButtonComponent from "../../components/ButtonComponent"
import ButtonCardComponent from "../../components/ButtonCardComponent"
export default function Home() {
  const [loaded] = useFonts({
    nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/testeIcon.png')}
        style={styles.logo}
      />
      <TouchableOpacity onPress={() => alert('teste')}>

      
      <Card containerStyle={styles.card} onPress={() => alert('teste')}
      >
        
        <Avatar
          size={32}
          rounded
          icon={{ name: "pencil", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#9700b9" }}
          
        />
        <Card.Title style={styles.title}></Card.Title>


        <Text style={styles.text}>
          Veja como fazer maquiagem
          passo-a-passo e saiba quais as
          dicas a seguir para fazer uma
          maquiagem para a noite e para o dia.
        </Text>

        
       
      </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('teste')} style={styles.hoverButton}>

      <Card containerStyle={styles.card} onPress={() => alert('teste')}
      >
        <Avatar
          size={32}
          rounded
          icon={{ name: "pencil", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#9700b9" }}
          
        />
        <Card.Title style={styles.title}>Grave seus passos a passos</Card.Title>


        <Text style={styles.text}>
        Faça você mesmo os passos de como fazer uma Makeup,
        podendo indicar também se essa maquiagem é para o dia ou para a noite.
        </Text>

      </Card>
      </TouchableOpacity>
      
      <p></p>

      <ButtonComponent
        title="ATUALIZAR PERFIL"
        left={true}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    width: 327,
    height: 182,
    backgroundColor: '#EA9AB2',
    borderWidth: 1,
    borderRadius: 10,
    


  },
  title: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: 700,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: 'nunito',
    fontWeight: 400,

  },
  logo: {
    width: 220,
    height: 220,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,

    elevation: 1,


  },
  TouchableOpacity:{
    cursor:'pointer',
    width: 327,
    height: 182,
    
  },
  
  


});


//<Link to={{ screen: 'Splash' }}>Tutorial de primeira MakeUp</Link>