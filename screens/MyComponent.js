import React, { useState } from 'react';
        import { View, Text, Button, StyleSheet } from 'react-native';
        
        const MyComponent = () => {
          const [visible, setVisible] = useState(false);
        
          const handleButtonPress = () => {
            setVisible(true);
          };
        
          return (
            <View>
                <Button title="Show Toast" onPress={handleButtonPress} />
     
            <View style={styles.container}>
              <Button title="Show Toast" onPress={handleButtonPress} />
              {visible && (
                <View style={styles.toastContainer}>
                  <Text style={styles.toastMessage}>Your operation succeeded.</Text>
                </View>
              )}
            </View>
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: { flex: 2 },
          toastContainer: {
            paddingHorizontal: 16,
            paddingVertical: 8,
            marginTop: 16,
            borderRadius: 4,
            backgroundColor: '#E9ECEF',
          },
          toastMessage: {
            fontSize: 14,
            lineHeight: 20,
            color: '#333',
          },
        });
        
        export default MyComponent;