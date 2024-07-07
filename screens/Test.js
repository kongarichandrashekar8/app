// import React, { useState, useRef } from 'react';
// import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Test = () => {
//   const [text, setText] = useState('');
//   const [showUsers, setShowUsers] = useState(false);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  
//   const inputRef = useRef(null);

//   const users = [
//     { name: 'chandra', id: 2 },
//     { name: 'shekar', id: 3 }
//   ];

//   const handleTextChange = (inputText) => {
//     setText(inputText);

//     const lastWord = inputText.split(' ').pop();
//     if (lastWord.startsWith('@')) {
//       const query = lastWord.slice(1).toLowerCase();
//       const filtered = users.filter(user => user.name.toLowerCase().startsWith(query));
//       setFilteredUsers(filtered);
//       setShowUsers(true);

//       inputRef.current.measure((fx, fy, width, height, px, py) => {
//         setDropdownPosition({ top: py + height, left: px });
//       });
//     } else {
//       setShowUsers(false);
//     }
//   };

//   const handleUserSelect = (user) => {
//     const words = text.split(' ');
//     words.pop();  // Remove the current "@" mention
//     setText(`${words.join(' ')} @${user.name} `);
//     setShowUsers(false);
//   };

//   const renderUserItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => handleUserSelect(item)}
//       style={styles.userItem}
//     >
//       <Text>{`@${item.name}`}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         ref={inputRef}
//         style={styles.textInput}
//         value={text}
//         onChangeText={handleTextChange}
//         placeholder="Type something..."
//         multiline
//       />
//       {showUsers && (
//         <View style={[styles.userList, { top: dropdownPosition.top, left: dropdownPosition.left }]}>
//           <FlatList
//             data={filteredUsers}
//             renderItem={renderUserItem}
//             keyExtractor={item => item.id.toString()}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   textInput: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 8,
//     borderRadius: 4,
//     minHeight: 100,
//   },
//   userList: {
//     position: 'absolute',
//     maxHeight: 200,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     backgroundColor: '#fff',
//     zIndex: 1000,
//   },
//   userItem: {
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default Test;
// import React, { useState, useRef } from 'react';
// import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

// const Test = () => {
//   const [text, setText] = useState('');
//   const [showUsers, setShowUsers] = useState(false);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  
//   const inputRef = useRef(null);

//   const users = [
//     { name: 'chandra', id: 2 },
//     { name: 'shekar', id: 3 }
//   ];

//   const handleTextChange = (inputText) => {
//     setText(inputText);

//     const lastWord = inputText.split(' ').pop();
//     if (lastWord.startsWith('@')) {
//       const query = lastWord.slice(1).toLowerCase();
//       const filtered = users.filter(user => user.name.toLowerCase().startsWith(query));
//       setFilteredUsers(filtered);
//       setShowUsers(true);

//       inputRef.current.measure((fx, fy, width, height, px, py) => {
//         setDropdownPosition({ top: py + height, left: px });
//       });
//     } else {
//       setShowUsers(false);
//     }
//   };

//   const handleUserSelect = (user) => {
//     const words = text.split(' ');
//     words.pop();  // Remove the current "@" mention
//     setText(`${words.join(' ')} @${user.name} `);
//     setShowUsers(false);
//     // Keep the TextInput focused
//     setTimeout(() => inputRef.current.focus(), 100);
//   };

//   const renderUserItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => handleUserSelect(item)}
//       style={styles.userItem}
//     >
//       <Text>{`@${item.name}`}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         ref={inputRef}
//         style={styles.textInput}
//         value={text}
//         onChangeText={handleTextChange}
//         placeholder="Type something..."
//         multiline
//       />
//       {showUsers && (
//         <View style={[styles.userList, { top: dropdownPosition.top, left: dropdownPosition.left }]}>
//           <FlatList
//             data={filteredUsers}
//             renderItem={renderUserItem}
//             keyExtractor={item => item.id.toString()}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   textInput: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 8,
//     borderRadius: 4,
//     minHeight: 100,
//   },
//   userList: {
//     position: 'absolute',
//     maxHeight: 200,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     backgroundColor: '#fff',
//     zIndex: 1000,
//   },
//   userItem: {
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default Test;

import React, { useState, useRef } from 'react';
import { View, TextInput, FlatList,Platform, Text, TouchableOpacity, StyleSheet, Dimensions ,Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';

const Test = () => {
  const [text, setText] = useState('');
  const [showUsers, setShowUsers] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dropdownPosition, setDropdownPosition] = useState({ bottom: 0, left: 0 });

  
  const inputRef = useRef(null);

  const users = [
    { name: 'chandra', id: 2 },
    { name: 'shekar', id: 3 },
    { name: 'fsd', id: 4 },
    { name: 'shezfzkar', id: 42 },
    { name: 'chasdfasndra', id: 25 },
    { name: 'sheasakar', id: 31 }
  ];

  const handleTextChange = (inputText) => {
    setText(inputText);

    const lastWord = inputText.split(' ').pop();
    if (lastWord.startsWith('@')) {
      const query = lastWord.slice(1).toLowerCase();
      const filtered = users.filter(user => user.name.toLowerCase().startsWith(query));
      setFilteredUsers(filtered);
      setShowUsers(true);

      inputRef.current.measureInWindow((x, y, width, height) => {
        const windowHeight = Dimensions.get('window').height;
        const maxHeight = windowHeight / 2 - (y + height);
        setDropdownPosition({ top: y + height, left: x, maxHeight: maxHeight > 200 ? 200 : maxHeight });
      });
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

  return (
    <View style={styles.container}>

 <TextInput
 ref={inputRef}
 style={styles.textInput}
 value={text}
 onChangeText={handleTextChange}
 placeholder="Type something..."
 multiline
/>

      
      {showUsers && (
        <KeyboardAvoidingView style={[styles.userListContainer, {

          minHeight: 100,
          width: '100%' // Ensure it spans the width of the screen or as needed
        }]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
  
          <FlatList
            data={filteredUsers}
            renderItem={renderUserItem}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id.toString()}
            style={styles.userList}
          />
   
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    minHeight: 100,
  },
  userListContainer: {

    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    zIndex: 1000,
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



export default Test;




