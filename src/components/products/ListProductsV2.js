import React from 'react'
import { Text, FlatList } from 'react-native'

import Styles from '../Styles'
import Products from './Products'

export default props => {

    const productRender = ({ item: p }) => {
        return <Text>{p.id}) {p.name} custa R$ {p.price}</Text>
    }

    return (
        <>
            <Text style = {Styles.txtBig}>Lista de Produtos V2</Text>
            <FlatList 
                data = {Products}
                keyExtractor={i => `${i.id}`}
                renderItem = {productRender}
            />
        </>
    )
}