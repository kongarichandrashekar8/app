
import { useEffect, useRef, useState } from 'react';
import { View, Animated,TextInput, FlatList,Platform, Text, TouchableOpacity, StyleSheet, Dimensions ,Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar } from '@react-native-material/core';

const AddNote = () => {
    const [text,setText]=useState('')
    const [showUsers, setShowUsers] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const inputRef = useRef(null);


  const users = [
    { name: 'chandra', id: 2, color:'#7dfa9e' },
    { name: 'shekar', id: 3,color:'#f79299' },
    { name: 'fsd', id: 4,color:'#f7ef92' },
    { name: 'shezfzkar', id: 42,color:'#fa9d5f' },
    { name: 'chasdfasndra', id: 25,color:'#cff792' },
    { name: 'sheasakar', id: 381,color:'#b792f7' },
    { name: 'shezfzkar', id: 402,color:'#fa5fb4' },
    { name: 'chasdfasndra', id: 235,color:'#5ffad6' },
    { name: 'sheasakar', id: 301,color:'#a05ffa' }
  ];
  const handleTextChange = (inputText) => {
    setText(inputText);

    const lastWord = inputText.split(' ').pop();
    if (lastWord.startsWith('@')) {
      const query = lastWord.slice(1).toLowerCase();
      const filtered = users.filter(user => user.name.toLowerCase().startsWith(query));
      setFilteredUsers(filtered);
      setShowUsers(true);
    } else {
      setShowUsers(false);
    }
  };
  const handleUserSelect = (user) => {
    const words = text.split(' ');
    words.pop();  // Remove the current "@" mention
    setText(`${words.join(' ')} @${user.name} `);
    setShowUsers(false);
    // Keep the TextInput focused
    setTimeout(() => inputRef.current.focus(), 0); // Delay is needed to ensure focus happens after state update
  };
  const renderUserItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleUserSelect(item)} style={styles.userItem}>
        <View className={'flex-row items-center'}>
        <Avatar label={item.name[0]} size={30} color={item.color} />
        <Text className='pl-2'>{`${item.name}`}</Text>
        </View>
    </TouchableOpacity>
  );

  return (
    <View className='flex-col  ' style={styles.container}>

<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
       
        <TextInput
      selectionColor={'#006aff'}
      autoFocus={true} 
      style={{textAlignVertical: 'top'}}
      className={'min-h- w-full text-lg border-input  px-5 py-3'}
    multiline={true}
    numberOfLines={4}

    value={text}
    
    ref={inputRef}

    onChangeText={handleTextChange}
    placeholder="Type something..."
    />
     
      </KeyboardAvoidingView>

{/* 
          {showUsers && (<FlatList
            data={filteredUsers}
            renderItem={renderUserItem}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id.toString()}
            style={styles.userList}
          />
        )} */}
  
      
        



        <KeyboardAvoidingView className='m-1' style={[{

          minHeight: 100,
     
        }]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
             
          {showUsers && (<FlatList
            data={filteredUsers}
            renderItem={renderUserItem}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id.toString()}
            style={styles.userList}
          />
        )}
     
  
  
        </KeyboardAvoidingView>
 
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    textInput: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 8,
      borderRadius: 4,
      minHeight: 100,
    },
    userListContainer: {
        




    },
    userList: {
      maxHeight: 200,
    },
    userItem: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });

export default AddNote