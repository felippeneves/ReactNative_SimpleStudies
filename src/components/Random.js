import React from 'react'
import { Text } from 'react-native'

import Styles from './Styles'

export default ({ min, max }) => {
    
    // const { min, max } = props
    const random = Math.floor(Math.random() * (max - min) ) + min

    return (
        <Text style={Styles.txtBig}>
            Valor aleatório gerado {random}
        </Text>
    )
}