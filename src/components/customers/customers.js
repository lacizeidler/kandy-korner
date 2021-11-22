import { useEffect, useState  } from "react"
import "./customers.css"

export const Customers = () => {
    const [customers, modifyCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then((customersArray) => {
                modifyCustomers(customersArray)
            })
        },
        []
    )
    return (
        <>
            {
                customers.map(
                    (customerObject) => {
                        return <div className="customer" key={customerObject.id}>
                        <p className="customer--name" >{customerObject.name}</p>
                        <p className="customer--address">{customerObject.address}</p>
                        <p className="customer--email">{customerObject.email}</p>
                        </div>
                    }
                )
            }
        </>
    )
}