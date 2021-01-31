import React from 'react'
import { Text } from 'react-native'

import Styles from './Styles'

export default props => (
        <Text style = {Styles.txtBig}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
)