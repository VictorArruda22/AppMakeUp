import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Avatar, Icon } from '@rneui/themed';
import ButtonComponent from '../../components/ButtonComponent';
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Tela home</Text>

      <Card style={styles.card}>
        <Avatar
          name='face-woman-shimmer'
          type='MaterialCommunityIcons'
          color='#517fa4'
        />
        <Card.Title>Tutorial de primeira MakeUp</Card.Title>


        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>
      </Card>

      <Card >
        <Card.Title>Grave seus passos a passos</Card.Title>


        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>

      </Card>

      <ButtonComponent />

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
    width: '327px',
    height: '182px',
    backgroundColor: 'red'
  }
});
