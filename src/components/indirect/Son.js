import React from 'react'
import { Button } from 'react-native'

export default props => {

    function generateNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }

    return (
        <Button 
            title='Executar'
            onPress= {function () {
                const n = generateNumber(props.min, props.max)
                props.function(n, 'O valor é: ')
            }}
        />

    )
}