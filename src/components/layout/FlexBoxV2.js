import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Square from './Square'

export default props => {
    return (
        <SafeAreaView style = {style.FlexV2}>
            <Square color = '#ff801a'/>
            <Square color = '#50d1f6'/>
            <Square color = '#dd22c1'/>
            <Square color = '#8312ed'/>
            <Square color = '#36c9a7'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: '#000'
    }
})