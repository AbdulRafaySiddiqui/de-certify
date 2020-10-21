import React from "react";
import { Navbar, Nav, Image, NavDropdown, Spinner } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { v4 as guid } from 'uuid';

export const NavigationBar = () => {
    const history = useHistory();

    // const signOutHandler = () => {
    //     dispatch(signOut());
    //     dispatch(setUserDetails(null));
    //     history.push('/signin');
    // }

    let authenticatedNavLinks = [];
    if (true) {
        authenticatedNavLinks = [
            <NavDropdown key={guid()} className='mx-3' title="Campaigns" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/campaigns' href='#all_campaigns'>All Campaigns</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/my_campaigns' href='#my_campaigns'>My Campaigns</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/create_campaign' href='#create_campaign'>Create Campaign</NavDropdown.Item>
            </NavDropdown>,

            <Nav.Link key={guid()} className='mx-3' as={Link} to='/my_donations' href='#my_donations'>My Donations</Nav.Link>,
        ];
        const spinner = <Spinner animation="grow" variant="light" role="status" />;

        const signOutButton =
            <NavDropdown key={guid()} className='mx-3' alignRight
                title={
                    <Image height='30px' width='30px' roundedCircle src={"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}></Image>
                }
                id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/profile' href='#profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} href='#signout' >Sign Out</NavDropdown.Item>
            </NavDropdown>;

        return (
            <div>
                <Navbar expand='lg' bg="primary" variant="dark" fixed>
                    {/* Home Icon */}
                    <Navbar.Brand style={{ fontWeight: 'bold' }} href="/">
                        {/* <Image width="30"
                        height="30"
                        className="d-inline-block align-top" src={logo} /> */}
                         De-Certify
                </Navbar.Brand>

                    {/* Toggler */}
                    <Navbar.Toggle aria-controls='navbar-items' />
                    <Navbar.Collapse id='navbar-items'>

                        <Nav className="ml-auto">
                            {/* Home */}
                            <Nav.Link key={guid()} className='mx-3' as={Link} to='/' href='#home'>Home</Nav.Link>

                            {/* All Certificates */}
                            <Nav.Link key={guid()} className='mx-3' as={Link} to='/certificates' href='#all_certificates'>My Certificates</Nav.Link>

                            {/* All Certificates */}
                            <Nav.Link key={guid()} className='mx-3' as={Link} to='/profile' href='#profile'>Profile</Nav.Link>

                            {/* Add Certificate */}
                            <Nav.Link key={guid()} className='mx-3' as={Link} to='/add_certificate' href='#add_certificate'>Upload Certificate</Nav.Link>

                            {/* All Students */}
                            <Nav.Link key={guid()} className='mx-3' as={Link} to='/students' href='#students'>All Students</Nav.Link>

                            {/* Pending Approvals */}
                            <Nav.Link key={guid()} className='mx-3' as={Link} to='/pending_approvals' href='#pending_approvals'>Pending Approvals</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
