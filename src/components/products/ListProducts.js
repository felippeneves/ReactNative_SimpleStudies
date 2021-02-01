import React from 'react'
import { Text } from 'react-native'

import Styles from '../Styles'
import Products from './Products'

export default props => {

    function getListProducts() {
        //Caso precise do indice
        // return Products.map((p, i) => {
        return Products.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.name} custa R$ {p.price}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={Styles.txtBig}>Lista de Produtos</Text>
            {/* {Products.map(p => {
                return <Text key={p.id}>{p.id}) {p.name} custa R$ {p.price}</Text>
            })} */}
            {getListProducts()}
        </>
    )
}