import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { CertificatesList } from '../../student_dashboard/components/certificates_list.js';


export const PendingApprovals = () => {
    return (
        <Container>
            <Row className='justify-content-center my-3'>
                <h2 style={{ fontWeight: "bold", color: "blue" }}>Pending Approvals</h2>
            </Row>
            <Row>
                <CertificatesList certificates={[null, null, null, null, null, null]} />
            </Row>
        </Container>
    )
}
