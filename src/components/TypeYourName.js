import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput } from 'react-native'

import Styles from './Styles'

export default props => {
    let [name, setName] = useState('Teste')
    return (
        <SafeAreaView>
            <Text style = {Styles.txtBig}>{name}</Text>
            <TextInput 
                placeholder = 'Digite seu nome'
                value = {name}
                //É gerado um evento dentro do Input, o evento dispara uma função, em seguida é necessário ajustar o valor através da função setName
                //E após o name ser alterado é refletido na interface gráfica. Ou seja é alterado o estado do componente e após o estado ser alterado a 
                //interface gráfica é alterada
                onChangeText = {name => setName(name)}/>
        </SafeAreaView>
    )
}