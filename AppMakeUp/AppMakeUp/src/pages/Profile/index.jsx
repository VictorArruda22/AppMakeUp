import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Tela profile</Text>
      <StatusBar style="auto" />

      <Avatar.Icon icon="account" color="black" style={{backgroundColor:"white", shadowColor: "#fff",  shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.8, shadowRadius: 8}} />
      <Text>Usuário Anônimo</Text>
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
});


