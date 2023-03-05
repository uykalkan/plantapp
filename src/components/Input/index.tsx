import {TextInput, TextInputProps, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './styles';

interface InputProps extends TextInputProps {
  addonBefore?: ReactNode;
}

const Input: React.FC<InputProps> = ({addonBefore, ...props}) => {
  const refInput = React.useRef<TextInput>(null);

  return (
    <View>
      <TextInput
        ref={refInput}
        placeholderTextColor="#AFAFAF"
        {...props}
        style={[styles.input, props.style]}
      />
      <TouchableOpacity
        onPress={() => refInput.current?.focus()}
        style={styles.searchIcon}>
        {addonBefore}
      </TouchableOpacity>
    </View>
  );
};

export default Input;
