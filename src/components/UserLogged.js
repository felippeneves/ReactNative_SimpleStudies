import React from 'react'
import { Text } from 'react-native'

import Styles from './Styles'
import If from './If'

export default props => {

    const user = props.user || {}

    return (
        <>
            <If test={user && user.name && user.email}>
                <Text style={Styles.txtBig}>Usuário Logado:</Text>
                <Text style={Styles.txtBig}>
                    {user.name} - {user.email}
                </Text>
            </If>
        </>
       
    )
}