import React, { useState, useEffect } from "react"
import API from "../../utils/API"

function Search() {


    useEffect(() => {
        API.getEmployees().then(res => {

            const employeeArr = (res.data.results)


            employeeArr.sort((a, b) => b.dob.age - a.dob.age)

            console.log(employeeArr)

            employeeArr.map(friend => {
                console.log(friend)
            })
        })
    })
}

export default Search