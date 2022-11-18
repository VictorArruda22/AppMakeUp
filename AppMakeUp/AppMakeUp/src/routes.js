import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './pages/Splash';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Usefulnformations from './pages/Useful_Information';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="UsefulInformations" component={Usefulnformations} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}