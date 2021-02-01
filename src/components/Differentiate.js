import React from 'react'
import { Text, Platform } from 'react-native'

import Styles from './Styles'

export default props => {
    if(Platform.OS === 'android') {
        return <Text style={Styles.txtBig}>Android</Text>
    } else if(Platform.OS === 'ios') {
        return <Text style={Styles.txtBig}>IOS</Text>
    } else {
        return <Text style={Styles.txtBig}>{Platform.OS}</Text>
    }
}