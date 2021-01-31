import React, { useState } from 'react'
import { Text } from 'react-native'
import Styles from '../Styles'

import Son from './Son'

export default props => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')

    function showValue(number, text) {
        setNum(number)
        setText(text)
    }

    return (
        <>
            <Text style={Styles.txtBig}>{text}{num}</Text>
            <Son 
                min={1} 
                max={60} 
                function={showValue}
            />
        </>
    )
}