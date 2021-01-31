import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Differentiate from './components/Differentiate'
// import CounterV2 from './components/counter/CounterV2'
// import FatherIndirect from './components/indirect/Father'
// import FatherDirect from './components/direct/Father'
// import Counter from './components/Counter'
// import Button from './components/Button'
// import Title from './components/Title'
// import Random from './components/Random'
// import MinMax from './components/MinMax'
// import Comp, { Comp1, Comp2 } from './components/Multi'
// import First from './components/First'

export default () => (
    <SafeAreaView style = {style.App}>
        <Differentiate />
        {/*
            <CounterV2 />
            <FatherIndirect />
            <FatherDirect />
            <Counter initial={100} count={10} />
            <Counter />
            <Button />
            <Title title='Cadastro Produto'
                subtitle='Tela de Cadastro do Produto'/>
            <Random min={1} max={60}/>
            <MinMax min={3} max={30} /> 
            <Comp />
            <Comp1 />
            <Comp2 />
            <First /> 
        */}

    </SafeAreaView>
)

const style = StyleSheet.create ( {
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    }
})