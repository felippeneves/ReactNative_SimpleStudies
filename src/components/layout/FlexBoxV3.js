import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Square from './Square'

export default props => {
    return (
        <SafeAreaView style = {style.FlexV2}>
            <Square color = '#ff801a' size = {20} />
            <Square color = '#50d1f6' size = {30} />
            <Square color = '#dd22c1' size = {40} />
            <Square color = '#8312ed' size = {50} />
            <Square color = '#36c9a7' size = {60} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})