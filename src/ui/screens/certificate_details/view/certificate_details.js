import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Spinner, Badge } from 'react-bootstrap';
import { FaExclamationCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CertificateDetails = () => {
    let [visibility, setVisibility] = useState(true);

    let titleStyle = {
        fontWeight: "bold",
        fontSize: "20px"
    };

    let contentStyle = {
        // textOverflow: "ellipsis",
        // whiteSpace: "nowrap",
        // overflow: "hidden"
    };

    return (
        <Container>
            <Row className='justify-content-center m-4'>
                <Image src={"https://mathias-sager.com/wp-content/uploads/2019/07/80-is-Psychology-Certificate-sample2.png"}
                    height="600px"></Image>
            </Row>
            <Row className='justify-content-center'>
                <h2 style={{ fontWeight: "bold", color: "blue" }}>Certificate Details</h2>
            </Row>

            <Card style={{ boxShadow: " 0 10px 10px rgba(0, 0, 0, 0.2)", margin: "20px" }}>
                <Card.Body>
                    <Container>
                        <Row>
                            {/* Visibility */}
                            <Col lg className="mb-3">
                                <div style={{ cursor: 'pointer' }} onClick={() => setVisibility((value) => visibility = !value)}>
                                    Visibility: {visibility ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </Col>
                            {/* Status */}
                            <Col lg='auto' className='ml-auto mb-3'>
                                <FaExclamationCircle className='mb-1' /> Status: <h4 style={{ display: "inline" }}><Badge variant="success">Verified</Badge></h4>
                            </Col>
                        </Row>
                        {/* Certificate Name */}
                        <Row xs='auto' className='mt-3'>
                            <Col md={4} style={titleStyle}>
                                Certificate Name:
                            </Col>
                            <Col style={contentStyle}>
                                Charater Certificate
                            </Col>
                        </Row>
                        {/* Description */}
                        <Row xs='auto' className='mt-3'>
                            <Col md={4} style={titleStyle}>
                                Description:
                            </Col>
                            <Col style={contentStyle}>
                                Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content.
                                It’s built with flexion and is fully responsive. Below is an example and an in-depth look at how
                                the grid comes together.
                            </Col>
                        </Row>

                        {/* Transaction Hash */}
                        <Row xs='auto' className='mt-3'>
                            <Col md={4} style={titleStyle}>
                                Transaction Hash:
                            </Col>
                            <Col style={contentStyle}>
                                <Link> 0xC1c0E98996Fa2859336314A32936B3d3291cFf47</Link>
                            </Col>
                        </Row>

                        {/* IPFS */}
                        <Row xs='auto' className='mt-3'>
                            <Col md={4} style={titleStyle}>
                                IPFS:
                            </Col>
                            <Col style={contentStyle}>
                                <Link> 0xC1c0E98996Fa2859336314A32936B3d3291cFf47</Link>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

        </Container>
    )
}
