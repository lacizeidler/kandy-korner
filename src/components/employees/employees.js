import { useEffect, useState  } from "react"
import { useHistory } from "react-router"
import "./employees.css"

export const Employees = () => {
    const [employees, modifyEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((employeesArray) => {
                modifyEmployees(employeesArray)
            })
        },
        []
    )
    const deleteEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then (() => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((employeesArray) => {
                modifyEmployees(employeesArray)
            })}
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