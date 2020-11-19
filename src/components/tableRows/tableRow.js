import React from "react"

function RenderRow({ employee }) {

    return (
        <tr className="employee-row">
            <td className="employee-picture text-center"><img src={employee.picture.medium} /></td>
            <td className="employee-name text-center">{`${employee.name.first} ${employee.name.last}`}</td>
            <td className="employee-email text-center">{`${employee.email}`}</td>
            <td className="employee-phone text-center">{`${employee.phone}`}</td>
            <td className="employee-location text-center">{`${employee.location.city}, ${employee.location.country}`}</td>
        </tr>
    )
}

export default RenderRow