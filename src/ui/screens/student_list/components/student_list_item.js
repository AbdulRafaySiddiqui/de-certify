import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

export const StudentListItem = ({ student }) => {
    return (
        <React.Fragment>
            < tr >
                {/* View */}
                <td>
                    <FaEye style={{ cursor: 'pointer' }} />
                </td>

                {/* S.No */}
                <td>
                    {student.sNo}
                </td>

                {/* Name */}
                <td>
                    {student.name}
                </td>

                {/* Address */}
                <td>
                    <a target='_blank' href={`https://ropsten.etherscan.io/address/${student.address}`}>{student.address}</a>
                </td>

                {/* No. of Certificates */}
                <td>
                    <Badge variant="success">{student.certificateCount}</Badge>
                </td>
            </tr>
        </React.Fragment >
    )
}
