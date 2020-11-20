import React, { useState } from "react"
import RenderRow from "../tableRows/tableRow"
import "./table.css"


function RenderTable({ employeeArr }) {

    const [isSorted, setIsSorted] = useState(0)

    function filterNames(event) {

        let rows = document.getElementsByClassName("employee-name")

        if (event.target.value) {

            for (var i = 0; i < rows.length; i++) {

                let rowtext = rows[i].textContent.toLowerCase()
                if (!rowtext.includes(event.target.value.toLowerCase())) {

                    rows[i].parentElement.style.display = "none"
                } else {

                    rows[i].parentElement.style.display = null
                }
            }
        }

        if (!event.target.value || event.target.value === "") {

            for (i = 0; i < rows.length; i++) {

                rows[i].parentElement.style.display = null
            }
        }
    }

    function sortAlpha() {

        
        let searchedVal = document.querySelector(".search-bar").value
        let rows = document.getElementsByClassName("employee-name")
        
        for (var i = 0; i < rows.length; i++) {

            rows[i].parentElement.style.display= null
            console.log(1)
        }

        if (isSorted === 0) {
            employeeArr.sort((a, b) => {

                if (a.name.first > b.name.first) {
                    return 1
                } else if (a.name.first < b.name.first) {
                    return -1
                } else {
                    return 0
                }
            })

            setIsSorted(1)
            console.log(2)
        }

        rows = document.getElementsByClassName("employee-name")
        if (searchedVal) {
            console.log(searchedVal)
            for (i = 0; i < rows.length; i++) {

                let rowtext = rows[i].textContent.toLowerCase()
                rows[i].parentElement.style.display = null
                console.log(rowtext)
                if (!rowtext.includes(searchedVal.toLowerCase())) {

                    rows[i].parentElement.style.display = "none"
                    console.log("false")
                } else {

                    rows[i].parentElement.style.display = null
                    console.log("true")
                }
            }
            console.log(3)
        }
    }

    function sortReverseAlpha() {

        let searchedVal = document.querySelector(".search-bar").value
        let rows = document.getElementsByClassName("employee-name")

        if (isSorted === 1) {

            employeeArr.sort((a, b) => {

                if (a.name.first > b.name.first) {
                    return -1
                } else if (a.name.first < b.name.first) {
                    return 1
                } else {
                    return 0
                }
            })

            setIsSorted(0)
            console.log(2)
        }
        
        rows = document.getElementsByClassName("employee-name")
        if (searchedVal) {

            console.log(searchedVal)
            for (var i = 0; i < rows.length; i++) {

                let rowtext = rows[i].textContent.toLowerCase()
                rows[i].parentElement.style.display = null
                console.log(rowtext)
                if (!rowtext.includes(searchedVal.toLowerCase())) {

                    rows[i].parentElement.style.display = "none"
                    console.log("false")
                } else {

                    rows[i].parentElement.style.display = null
                    console.log("true")
                }
            }
            console.log(3)
        }
    }
    // function sortTable() {

    //     sortAlpha()
    //     sortReverseAlpha()
    // }

    return (

        <table className="table table-dark">
            <tr>
                <th></th>
                <th className="text-center"><a className="name-header" onClick={event => (isSorted === 0) ? sortAlpha() : sortReverseAlpha()}>Name</a>
                    <input class="mr-sm-2 search-bar" type="search" placeholder="Search" aria-label="Search" onChange={event => filterNames(event)}></input>
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