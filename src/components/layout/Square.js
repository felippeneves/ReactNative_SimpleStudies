import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default props => {

    const size = props.size || 50 

    return <SafeAreaView style = {{
                backgroundColor: props.color || '#000', 
                width: size,
                height: size }}/>
}

const style = StyleSheet.create({
    Square: {
        height: 50,
        width: 50,
    }
})