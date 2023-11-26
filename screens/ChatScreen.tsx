import { View,Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {useState, useEffect} from 'react'

const ChatScreen = () => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
      const ws = new WebSocket('http://192.168.1.76:8080/api/ws')
      setSocket(ws)

      ws.onopen = () => {
      ws.send('something'); 
      };
      ws.onmessage = e => {
        console.log(e.data);
      };

      ws.onerror = e => {
        console.log("an error occurred");
      };

      ws.onclose = e => {
        console.log(e.code, e.reason);
      };
    }, []);

const connectSocket = () => {
      
    }

const sendMessage = () => {
  if(socket){
    socket.send(message);
  }
  else
    console.log('???')  
}

  return (
    <View>
        <TextInput placeholder={'Nhập tin nhắn...'} value={message} onChangeText={(text) => setMessage(text)} style={styles.textInput}></TextInput>   
        <TouchableOpacity onPress={sendMessage}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={connectSocket}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}>Connect socket</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChatScreen;

const styles = StyleSheet.create({
    textInput: {
      height: 48,
      borderRadius: 8,       
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 6,
      marginTop: 6,
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    }
  })