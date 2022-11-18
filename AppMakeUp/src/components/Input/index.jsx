import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Input = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={{fontSize:'10px', height: 2}} 
    />
  );
};
export default Input;




  
