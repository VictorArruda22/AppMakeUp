import React from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';


const InputComponent = (props) => {

  return (
    <View>

<Input
      label=' '
      placeholder=' '
      leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      {...props.placeholder}
    />
        
        
        
        










    </View>
  );
};

export default InputComponent;






