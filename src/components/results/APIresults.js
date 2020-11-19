import React, { useState, useEffect } from "react"
import API from "../../utils/API"
import RenderTable from "../table/table"

function Search() {

    const [employeeArr, setEmployeeArr] = useState([])


    useEffect(() => {
        API.getEmployees().then(res => {

            setEmployeeArr(res.data.results)
        })
    },[])

    return (

        <RenderTable employeeArr = {employeeArr}/>

        
    
    )
}

export default Search