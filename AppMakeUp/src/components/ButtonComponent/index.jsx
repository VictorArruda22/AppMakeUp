import React from 'react';
import { View } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'; 
import { Button } from "@rneui/themed";

const ButtonComponent = (props) => {
  
    return (
        <View>

        <Button onPress={() => alert('teste')}
            

            buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
                
            }}
            
            >{props.left &&(<Icon name="arrow-left" color="white" />)}
            {props.title}
            {props.right &&(<Icon name="arrow-right" color="white" />)}
            
            </Button>
    </View>
    );
  };



export default ButtonComponent;