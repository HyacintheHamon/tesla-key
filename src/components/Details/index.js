import React, { Component } from 'react'

import { Container, TypeTittle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';

import uberx from '../../assets/uberx.png';

export default class Details extends Component {
    render() {
        return (
            <Container>
                <TypeTittle>Popular</TypeTittle>
                <TypeDescription> Viagens baratas para o dia a dia </TypeDescription>

                <TypeImage source={uberx} />
                <TypeTittle>UberX</TypeTittle>
                <TypeDescription>R$6,00</TypeDescription>
                <RequestButton><RequestButtonText>SOLICITAR UBERX</RequestButtonText></RequestButton>
            </Container>
        )
    }
}
