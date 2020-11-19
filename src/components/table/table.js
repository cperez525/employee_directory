import React from "react"
import RenderRow from "../tableRows/tableRow"

function RenderTable({ employeeArr }) {

    function filterTable(event) {

        let rows = document.getElementsByClassName("employee-name")

        if(event.target.value) {

            for(var i = 0; i < rows.length; i++){

                let rowtext = rows[i].textContent.toLowerCase()
                if (!rowtext.includes(event.target.value.toLowerCase())){

                    console.log("false")
                } else{
                    console.log("true")
                }
            }
        } else {

            for(i = 0; i < rows.length; i++) {

                rows[i].parentElement.removeAttribute("display")
            }
        }

    }

    return (

        <table className="table table-dark">
            <tr>
                <th></th>
                <th className="text-center">Name
                    <input class="mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={event => filterTable(event)}></input>
                </th>
                <th className="text-center">Email</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Location</th>
            </tr>

            {employeeArr.map(employee => <RenderRow employee={employee} />)}

        </table>
    )
}

export default RenderTable