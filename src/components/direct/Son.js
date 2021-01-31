import React from 'react'
import { Text } from 'react-native'

import Styles from '../Styles'

export default props => {
    return (
        <>
            <Text style={Styles.txtBig}>{props.a}</Text>
            <Text style={Styles.txtBig}>{props.b}</Text>
        </>
    )
}