import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import Style from '../Styles'
import MegaNumber from './MegaNumber'

export default class Mega extends Component {

    state = {
        qtNumber: this.props.qtNumber,
        numbers: []
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         qtNumber: props.qtNumber + 1000
    //     }
    // }

    // constructor(props) {
    //     super(props)

    //     this.changeQtNumber = this.changeQtNumber.bind(this)
    // }

    //Com arrow function o this sempre estará associado ao local onde a função foi definida
    changeQtNumber = (qtN) => {
        this.setState({ qtNumber: +qtN })
    }

    generateNumbers = () => {
        const numbers = Array(this.state.qtNumber)
            .fill()
            .reduce(n => [...n, this.generateNumberNotContained(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numbers })
    }

    // generateNumbers = () => {
    //     const { qtNumber } = this.state
    //     const numbers = []

    //     for(let i = 0; i < qtNumber; i++) {
    //         const n = this.generateNumberNotContained(numbers)
    //         numbers.push(n)
    //     }
        
    //     numbers.sort((a, b) => a - b)

    //     this.setState({ numbers })
    // }

    generateNumberNotContained = numbers => {
        const number = parseInt(Math.random() * 60) + 1
        return numbers.includes(number) ? this.generateNumberNotContained(numbers) : number
    }

    showNumbers = () => {
        const numbers = this.state.numbers
        return numbers.map(number => {
            return <MegaNumber key = {number} number = {number}/>
        })
    }

    render() {
        return (
            <>
                <Text style = {Style.txtBig}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType = {'numeric'}
                    style = {{ borderBottomWidth: 1}}
                    placeholder = 'Qtd. de Números'
                    value = {`${this.state.qtNumber}`}
                    onChangeText = {this.changeQtNumber}
                />
                <Button 
                    title='Gerar'
                    onPress={this.generateNumbers}
                />
                <View style = {{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.showNumbers()}
                </View>
            </>
        )
    }
}
