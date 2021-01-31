import React from 'react'
import { SafeAreaView, Button, StyleSheet } from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.buttons}>
            <Button title='+' 
                onPress={props.inc} />
            <Button title='-' 
                onPress={props.dec} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    },
})