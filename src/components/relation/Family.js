import React from 'react'
import { Text } from 'react-native'


export default props => {

    console.warn(props.children)

    return (
        <>
            <Text>[Início] Membros da família</Text>
            {props.children}
            <Text>[Fim] Membros da família</Text>
        </>
    )
}