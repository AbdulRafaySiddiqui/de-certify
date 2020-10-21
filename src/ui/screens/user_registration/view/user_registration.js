import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Image } from 'react-bootstrap';
import { LoadingButton } from '../../../components/loading_button/loading_button';
import { useHistory } from 'react-router-dom';

export const UserRegistration = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [accountType, setAccountType] = useState('Student');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const routeHistory = useHistory();

    const onEmailChanged = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setIsEmailValid(re.test(String(e.target.value).toLowerCase()));
    }

    const onPasswordChanged = (e) => {
        setPassword(e.target.value);
        setIsPasswordValid(e.target.value?.length > 0);
    }

    // const authenticateHandler = async (e) => {
    //     let wasSuccess = await authenticateAsync(appState.currentAccount, email, password, isSignUp, dispatch);
    //     if (wasSuccess) {
    //         if (isSignUp) {
    //             routeHistory.push('/profile');
    //         }
    //         else {
    //             routeHistory.push('/campaigns');
    //         }
    //     }
    // }

    return (
        <Container>
            <Row className='vh-100 justify-content-center' style={{ marginTop: '-50px' }}>
                <Col className='my-auto mx-2'>
                    <Image src={accountType === 'Student' ? "https://i.dlpng.com/static/png/6749939_preview.png"
                        : "https://lh3.googleusercontent.com/proxy/tbkWOp_ZRlCRrp3RzS8_uqyGwkQHhiVGrBp-KzSwTB8iYwgr8LTE86G44c3nxuM7_LREp-MWO6CGfQZLvLYpuExcvK1Car4svJlmcqJWzgxwTK_UQPDL4856cL7cwVQuWY9KwirrW-ycuTPsI4Q_08WJoIrlRu-Ec6kYZ4sJ3Huo9rxWlA9DWa78xY7bDQ"} height='400px' />
                </Col>
                <Col className='my-auto mx-2' lg='4' md='6'>
                    <Card style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }} border='light'>
                        <Card.Body>
                            <h1 className='my-3'>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                            <Form >
                                <Form.Control as="select" value={accountType}
                                    onChange={(e) => setAccountType(e.target.value)} className='my-2'>
                                    <option>Student</option>
                                    <option>Institute</option>
                                </Form.Control>
                                {
                                    isSignUp &&
                                    // Name
                                    < Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={name} />
                                        <Form.Control.Feedback type='invalid'>Invalid</Form.Control.Feedback>
                                    </Form.Group>
                                }

                                {/* Email */}
                                <Form.Group controlId="email">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text" value={email} onChange={(e) => onEmailChanged(e)} isInvalid={!isEmailValid} />
                                    <Form.Control.Feedback type='invalid'>Invalid</Form.Control.Feedback>
                                </Form.Group>

                                {/* Password */}
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e) => onPasswordChanged(e)} isInvalid={!isPasswordValid} />
                                    <Form.Control.Feedback type='invalid'>Password cannot be empty</Form.Control.Feedback>
                                </Form.Group>

                                {/* Sign in */}
                                <LoadingButton >
                                    {isSignUp ? 'Sign Up' : 'Sign In'}
                                </LoadingButton>

                                {/* {
                                    isSignUp &&
                                    <div>
                                        <p>NOTE: This metamask account will be linked to your account permanently and you cannot change it later!</p>
                                        <p>Selected Account: <b>{appState.currentAccount}</b></p>
                                    </div>
                                } */}

                                {/* Sign in/up toggle */}
                                <div style={{ textDecoration: 'none', marginTop: '10px' }}>
                                    <a style={{ textDecoration: 'none' }}
                                        className='text-align-center mt-5'
                                        onClick={() => setIsSignUp(!isSignUp)}
                                        href="#">{isSignUp ? 'Already have an account? Sign In!' : "Don't have an account? Sign Up Now!"}</a>
                                </div>

                            </Form>
                        </Card.Body>

                    </Card>

                </Col>
            </Row>
        </Container >
    );
}