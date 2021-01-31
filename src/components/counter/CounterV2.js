import React, { useState } from 'react'
import { Text } from 'react-native'

import Styles from '../Styles'
import ContadorDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Styles.txtBig}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <CounterButtons inc={inc}
                dec={dec} />
        </>
    )
}