import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Mega from './components/mega/Mega'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import TypeYourName from './components/TypeYourName'
// import ListProductsV2 from './components/products/ListProductsV2'
// import ListProducts from './components/products/ListProducts'
// import UserLogged from './components/UserLogged'
// import Family from './components/relation/Family'
// import Member from './components/relation/Member'
// import PairOdd from './components/PairOdd'
// import Differentiate from './components/Differentiate'
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
        <Mega qtNumber = {12}/>
        {/*
        <FlexBoxV4 />
        <FlexBoxV3 />
        <FlexBoxV2 />
        <FlexBoxV1 />
        <TypeYourName />
        <ListProductsV2 />
        <ListProducts />
        <UserLogged user={{ name:'Teste', email:'teste@teste.com' }}/>
        <UserLogged user={{ name:'Teste2' }}/>
        <UserLogged user={{ email:'teste3@teste.com' }}/>
        <UserLogged user={null}/>
        <UserLogged user={{}}/>
        <Family>
            <Member name='Membro1' lastName='Silva'/>
            <Member name='Membro2' lastName='Silva'/>
            <Member name='Membro3' lastName='Silva'/>
            <Member name='Membro4' lastName='Silva'/>
        </Family>
        <Family>
            <Member name='Membro1' lastName='Souza'/>
            <Member name='Membro2' lastName='Souza'/>
            <Member name='Membro3' lastName='Souza'/>
        </Family>
        <PairOdd num={3}/>
        <Differentiate />
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