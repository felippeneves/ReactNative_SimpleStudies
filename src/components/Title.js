import React, { Fragment } from 'react'
import { Text } from 'react-native'

import Styles from './Styles'

export default props => {
    return (
        //Nas duas maneiras os dois elementos de texto não estão sendo criados dentro de uma view, dessa maneira na tela que o componente está sendo exibida 
        //os elementos estarão sendo visualizados de acordo com as propriedades da tela

        // <>
        //     <Text style={Styles.txtBig}>{props.title}</Text>
        //     <Text>{props.subtitle}</Text>
        // </>
        <Fragment>
            <Text style={Styles.txtBig}>{props.title}</Text>
            <Text>{props.subtitle}</Text>
        </Fragment>
    )
}