import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

import Styles from '../Styles'

export default props => {
    return (
        <SafeAreaView style={style.Display}>
            <Text style={[Styles.txtBig, style.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    },
})