import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
export default function UsefulInformations() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Tela info</Text>
      <Link to={{ screen: 'Splash' }}>
      Go to Jane's profile
      </Link>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
