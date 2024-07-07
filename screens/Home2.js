
import { useEffect, useRef, useState } from 'react';
import { View, Animated,TextInput, FlatList,Platform, Text, TouchableOpacity, StyleSheet, Dimensions ,Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Home2 = () => {
    const [text,setText]=useState('')
    const [showUsers, setShowUsers] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const inputRef = useRef(null);


  const users = [
    { name: 'chandra', id: 2 },
    { name: 'shekar', id: 3 },
    { name: 'fsd', id: 4 },
    { name: 'shezfzkar', id: 42 },
    { name: 'chasdfasndra', id: 25 },
    { name: 'sheasakar', id: 381 },
    { name: 'shezfzkar', id: 402 },
    { name: 'chasdfasndra', id: 235 },
    { name: 'sheasakar', id: 301 }
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
      <Text>{`@${item.name}`}</Text>
    </TouchableOpacity>
  );

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); 
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const slideAnim = useRef(new Animated.Value(0)).current;  // Initial value for the animation

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [slideAnim]);
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


          {showUsers && (<FlatList
            data={filteredUsers}
            renderItem={renderUserItem}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id.toString()}
            style={styles.userList}
          />
        )}
  
      
        



        {/* <KeyboardAvoidingView className='m-1' style={[{

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
     
  
  
        </KeyboardAvoidingView> */}
 
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

export default Home2