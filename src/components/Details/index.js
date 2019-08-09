import React, { Component } from 'react'

import { Container, TypeTittle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';

export default class Details extends Component {
    render() {
        return (
            <Container>
                <TypeTittle>29mi</TypeTittle>
                <TypeDescription>31min</TypeDescription>
                <TypeDescription>10:12PM</TypeDescription>
                <RequestButton><RequestButtonText>START TRIP</RequestButtonText></RequestButton>
            </Container>
        )
    }
}
