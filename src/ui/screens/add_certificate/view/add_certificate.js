import React, { useEffect, useState } from 'react'
import { Formik, Field } from "formik";
import { useHistory } from 'react-router-dom';
import { Container, Form, Col, Row, InputGroup, Alert, Image } from 'react-bootstrap';
import { LoadingButton } from '../../../components/loading_button/loading_button';

export const AddCertificate = () => {
    const [file, setFile] = useState(null);

    const selectFileHandler = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    return (
        <Container>
            <h1 className='my-4 text-center' style={{ fontWeight: 'bold' }}>Add Certificate</h1>
            <Row className="justify-content-center">
                <Col xs='auto'>
                    <Image src=
                        {
                            file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/1024px-Circle-icons-document.svg.png"
                        }
                        height='300px'
                        width='300px' />
                </Col>
            </Row>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                }}
                // validationSchema={validationSchema}
                onSubmit={async (data, { resetForm }) => {

                }}
            >
                {({ handleSubmit, handleChange, errors, values, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        {/* Image */}
                        <Form.Group as={Row} controlid="image">
                            <Col xs='auto' className='mx-auto mt-2 mb-5'>
                                <Form.File
                                    onChange={selectFileHandler}
                                    id="custom-file-translate-scss"
                                    data-browse='Select Image'
                                    label={file ? file.name : ''}
                                    lang="en"
                                    custom
                                />
                            </Col>
                        </Form.Group>

                        {/* Certificate Name */}
                        <Form.Group controlId="name">
                            <Form.Label>Certificate Name</Form.Label>
                            <Field as={Form.Control} type="text" name='name' isInvalid={touched.name && !!errors.name} />
                            <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                        </Form.Group>

                        {/* Description */}
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="4" value={values.description} onChange={handleChange} name='description' isInvalid={touched.description && !!errors.description} />
                            <Form.Control.Feedback type='invalid'>{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                        <Row className='justify-content-end align-items-end my-4'>
                            {/* {
                                isCreating &&
                                <Col>
                                    <Alert style={{ marginBottom: '0' }} variant='warning'>Please wait while transaction is in progress...</Alert>
                                </Col>
                            } */}
                            <Col md="auto" >
                                <LoadingButton type='submit' className='px-5'>
                                    Add Certificate
                                </LoadingButton>
                            </Col>
                        </Row>

                    </Form>
                )}
            </Formik>
        </Container >
    );
}
