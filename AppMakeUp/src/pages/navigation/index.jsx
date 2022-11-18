import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Navigation() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Tela home</Text>
            <StatusBar style="auto" />
            <Button
                title="Splash"
                onPress={() => navigation.navigate('Splash')}
            />

            <Button
                title="Perfil"
                onPress={() => navigation.navigate('Profile')}
            />

            <Button
                title="Cadastro"
                onPress={() => navigation.navigate('Register')}
            />

            <Button
                title="Informações"
                onPress={() => navigation.navigate('UsefulInformations')}
            />

            <Button
                title="SOS"
                onPress={() => navigation.navigate('Profile')}
            />

            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />


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
