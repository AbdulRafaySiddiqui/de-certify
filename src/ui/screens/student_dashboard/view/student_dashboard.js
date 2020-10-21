import React from 'react';
import { Profile } from '../components/profile';
import { CertificatesList } from '../components/certificates_list.js';
import { Container, Col, Row } from 'react-bootstrap';

export const StudentDashboard = () => {
    return (
        <Container style={{ maxWidth: '1500px' }}>
            <Row>
                <Col lg={4} > <Profile /></Col>
                <Col lg={8}>
                    <h1 className='text-center mt-4' style={{ fontWeight: 'bold' }}>Certificates</h1>
                    <CertificatesList certificates={[null, null, null, null, null, null]} />
                </Col>
            </Row>
        </Container>
    )
}
