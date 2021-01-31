import React, { useState } from 'react'
import { Text, Button } from 'react-native'

import Styles from './Styles'


export default ({ initial = 0, count = 1 }) => {

    //Usando hooks para alterar o número e o estado do componente
    const [number, setNumber] = useState(initial)

    const inc = () => setNumber(number + count)
    const dec = () => setNumber(number - count)

    return (
        <>
            <Text style={Styles.txtBig}>{number}</Text>
            <Button title='+' 
                onPress={inc}/>
            <Button title='-' 
                onPress={dec}/>
        </>
    )
}