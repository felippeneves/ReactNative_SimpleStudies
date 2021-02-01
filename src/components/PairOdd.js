import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import Styles from './Styles'

export default ({ num = 0 }) => {

    return (
        <SafeAreaView>
            <Text style={Styles.txtBig}>O resultado é:</Text>
            {
                num % 2 === 0
                    ? <Text style={Styles.txtBig}>Par</Text>
                    : <Text style={Styles.txtBig}>Impar</Text>
                    // Se no caso não seja preciso renderizar nada, basta apenas retornar false
                    // : false
            }
        </SafeAreaView>
    )
}   