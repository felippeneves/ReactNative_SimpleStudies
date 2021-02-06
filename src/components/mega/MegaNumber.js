import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Style from '../Styles'

export default ({number}) => {
    return (
        <SafeAreaView style = {style.Container}>
            <Text style = {[Style.txtBig, style.Number]}>
                {number}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },
    Number: {
        color: '#fff'
    }
})