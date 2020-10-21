import React from 'react';
import { Card, Button, Row, Col, NavLink } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';

export const CertificateCard = () => {
    const history = useHistory();
    return (
        <Card style={{ width: '300px', cursor: "pointer", boxShadow: " 0 10px 10px rgba(0, 0, 0, 0.2)" }} onClick={() => history.push(`/certificate/address`)}>
            <Card.Img variant="top" src="https://mathias-sager.com/wp-content/uploads/2019/07/80-is-Psychology-Certificate-sample2.png" />
            <Card.Body>
                <Card.Title>Character Certificate</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Link >
                    <h5 style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }}>
                        0xnduwqidnjsadnwqudasjdnuqwdjkasddawdsfadfaergfdgsegsdvegfvasdv
                    </h5>
                </Link>
                <Button variant="primary">View</Button>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <FaCheckCircle style={{ color: 'green' }} /> Verified
                    </Col>
                    <Col>
                        <FaTimesCircle style={{ color: 'blue' }} /> Public
                    </Col>
                </Row>
            </Card.Footer>
        </Card >
    );
}
