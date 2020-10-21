import React from 'react';
import { Container, Table, Row } from 'react-bootstrap';
import { StudentListItem } from '../components/student_list_item';

export const StudentList = () => {
    let students = [
        {
            sNo: 1,
            name: "Abdul Rafay",
            address: "dasdasdasdasfawefadf",
            certificateCount: 5,
        },
        {
            sNo: 2,
            name: "Abdul Rafay",
            address: "dasdasdasdasfawefadf",
            certificateCount: 5,
        },
        {
            sNo: 2,
            name: "Abdul Rafay",
            address: "dasdasdasdasfawefadf",
            certificateCount: 5,
        },
        {
            sNo: 2,
            name: "Abdul Rafay",
            address: "dasdasdasdasfawefadf",
            certificateCount: 5,
        },
        {
            sNo: 2,
            name: "Abdul Rafay",
            address: "dasdasdasdasfawefadf",
            certificateCount: 5,
        }
    ]
    return (
        <Container>
            <Row className='justify-content-center my-3'>
                <h2 style={{ fontWeight: "bold", color: "blue" }}>Students</h2>
            </Row>
            <Table responsive hover striped bordered style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}>
                {
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>No. of Certificates</th>
                        </tr>
                    </thead>
                }
                <tbody>
                    {students
                        .map(
                            s =>
                                <StudentListItem key={s.address} student={s} />
                        )}
                </tbody>
            </Table>
        </Container>
    )
}
