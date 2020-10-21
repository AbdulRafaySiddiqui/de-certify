import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

export const Profile = () => {
    let titleStyle = {
        fontWeight: "bold",
        fontSize: "20px"
    };

    let contentStyle = {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Image src={"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}
                    roundedCircle height='150' width='150' />
            </Row>
            {/* Name */}
            <Row xs='auto' className='mt-3'>
                <Col style={titleStyle}>
                    Name:
                    </Col>
                <Col style={contentStyle}>
                    Abdul Rafay
                    </Col>
            </Row>
            {/* Institute Name */}
            <Row xs='auto' className='mt-3'>
                <Col style={titleStyle}>
                    Institute Name:
                    </Col>
                <Col style={contentStyle}>
                    XYZ
                    </Col>
            </Row>
            {/* Email */}
            <Row xs='auto' className='mt-3'>
                <Col style={titleStyle}>
                    Email:
                    </Col>
                <Col style={contentStyle}>
                    test@test.com
                    </Col>
            </Row>
            {/* Address */}
            <Row xs='auto' className='mt-3'>
                <Col style={titleStyle}>
                    Address:
                    </Col>
                <Col style={contentStyle}>
                    0xC1c0E98996Fa2859336314A32936B3d3291cFf47
                    </Col>
            </Row>
        </Container>
    )
}
