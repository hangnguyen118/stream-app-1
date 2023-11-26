import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const Logo = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.logo}>
            <FontAwesome5 name="kiwi-bird" size={24} color="black" />
            <Text style={styles.textLogo}> Logo </Text>
        </View> 
    </View>        
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})