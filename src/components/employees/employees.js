import { useEffect, useState  } from "react"
import { useHistory } from "react-router"
import { GetEmployees } from "../ApiManager"
import "./employees.css"

export const Employees = () => {
    const [employees, modifyEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            GetEmployees()
            .then(modifyEmployees)
        },
        []
    )
    const deleteEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then (() => {
            GetEmployees()
            .then(modifyEmployees)}
        )
    }
    return (
        <>
        <div>
        <button className="newHire" onClick={() => history.push("/employees/create")}>New Hire</button>
        </div>
            {
                employees.map(
                    (employeeObject) => {
                        return <div className="employees" key={employeeObject.id}>
                            <p>{employeeObject.name}</p>
                        <button className="fireEmployee" onClick={()=> {
                            deleteEmployee(employeeObject.id)
                        }}>Fire Employee</button>
                        </div>
                    }
                )
            }
        </>
    )
}