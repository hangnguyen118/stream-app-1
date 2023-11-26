import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    title: string,
    color?: string,
    onPress?: () => void
}

const LinkButton = ({title, color='#1877F2', onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.linkButton} onPress={onPress}>
        <Text style={{...styles.linkText, color:color}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default LinkButton

const styles = StyleSheet.create({
    linkButton:{
        height: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 8
    },
    linkText: {
        fontSize: 16
    }
})