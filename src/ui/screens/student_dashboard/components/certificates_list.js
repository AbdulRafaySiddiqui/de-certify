import React from 'react'
import { CertificateCard } from './certificate_card';
import { v4 as guid } from 'uuid';
import { Container, Col, Row } from 'react-bootstrap';

export const CertificatesList = ({ certificates }) => {
    return (
        <Container style={{ maxWidth: '1300px' }}>
            <Row className='justify-content-center align-content-center'>
                {
                    certificates.map(c =>
                        <Col sm='auto' lg='4' md='6' className='m-5'>
                            <CertificateCard key={guid()} certificate={c} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
