import React from "react";

export default function Examitem({exam})
{
    return(
    <tr>

    <td>{exam.patiendId}</td>
    <td>{exam.age}</td>
    <td>{exam.sex}</td>
    <td>{exam.zipcode}</td>
    <td>{exam.latestBmi}</td>
    <td>{exam.examId}</td>
    <td>{exam.latestWeight}</td>
    <td>{exam.imageURL}</td>
    <td>{exam.icuAdmit}</td>
    <td>{exam.mortality}</td>

    </tr>
    );
}
