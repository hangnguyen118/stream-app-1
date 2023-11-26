import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Alert } from 'react-native';

interface Props {
    title: string,
    color?: string
}

function handleButtonPress() {
    Alert.alert('Xin chào');
} 

const SquareButton = ( {title, color = '#1877F2'}: Props) => {

    const [count, setCount] = useState(0);

    useEffect(()=> {
        const id = setInterval( () => setCount(count + 1), 1000)
        return () => clearInterval(id)
    })

    return (
        <View style={{backgroundColor: 'pink', flex: 1, padding: 50}}>
            <TouchableOpacity onPress={handleButtonPress} style={{backgroundColor: 'green'}}>
                <Text>Click me!</Text>
            </TouchableOpacity>
            <Text style={{fontSize:40}}>{count}</Text>
        </View>
    )
}

export default SquareButton