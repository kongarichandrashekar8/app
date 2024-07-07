// screens/DetailsScreen.js


import { useEffect, useRef, useState } from 'react';
import { Button, View, Text,TextInput,Keyboard  } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function DetailsScreen({ navigation }) {

    const [text,setText]=useState('')
    const textInputRef = useRef(null);

    useFocusEffect(() => {
        // Focus the TextInput when screen is focused
        // textInputRef.current.focus();
        // Show the keyboard after focusing TextInput
        
        // setTimeout(() => {
        
        // }, 100);
      });
    
  return (
    <View style={{ flex: 1}}>
      
      <TextInput
      selectionColor={'#006aff'}
      autoFocus={true} 
      style={{textAlignVertical: 'top'}}
      className={'min-h-full w-full text-lg border-input bg-[#FDF0EE] px-5 py-3'}
    multiline={true}
    numberOfLines={4}
    onChangeText={(text) => setText({text})}
    value={text}/>
    </View>
  );
}
