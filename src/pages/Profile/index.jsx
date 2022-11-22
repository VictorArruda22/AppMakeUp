import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import InputComponent from '../../components/InputComponent';

export default function Profile() {
  return (
    <View style={styles.container}>


      <StatusBar style="auto" />

      <Avatar.Icon icon="account" color="black" style={styles.logo} Text />
      <div id='userAnon' style={styles.container}>
        <Text style={styles.anonUser}>Usuário Anônimo</Text>
      </div>

      

      <div>
        <InputComponent
        label='teste'
        placeholder='teste'
        />
      </div>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    flexDirection: 'row',
    textAlign: 'center'
  },
  logo: {
    backgroundColor: "#FFF",
    shadowColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  anonUser: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  
});


