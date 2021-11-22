import { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const EmployeeForm = () => {
    const [locations, modifyLocations] = useState([])
    const [ticket, update] = useState({
        name: "",
        manager: false,
        locationId: 0,
        fullTime: false,
        hourlyRate: 0
    })

    const history = useHistory()

    const SubmitForm = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: ticket.name,
            manager: ticket.manager,
            locationId: ticket.locationId,
            fullTime: ticket.fullTime,
            hourlyRate: ticket.hourlyRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/employees")
        })
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((locationsArray) => {
                modifyLocations(locationsArray)
            })
        },
        []
    )

    return (
        <form className="ticketForm" key="key">
            <h2 className="ticketForm__title">New Hire Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    onChange={
                        (event) => {
                            const copy = {...ticket}
                            copy.name = event.target.value
                            update(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Name Here"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                     onChange={
                        (event) => {
                            const copy = {...ticket}
                            copy.manager = event.target.checked
                            update(copy)
                        }
                    }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox"
                     onChange={
                        (event) => {
                            const copy = {...ticket}
                            copy.fullTime = event.target.checked
                            update(copy)
                        }
                    }
                         />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                    onChange={
                        (event) => {
                            const copy = {...ticket}
                            copy.hourlyRate = event.target.value
                            update(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Hourly Rate Here"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location:</label>
                         <select onChange={
                        (event) => {
                            const copy = {...ticket}
                            copy.locationId = event.target.value
                            update(copy)
                        }
                    }>
                             <option value="0">Choose a Location...</option>
                             
                                {
                                    locations.map(
                                        (location) => {
                                          return  <option value={location.id}>
                                               {location.name}
                                               </option>
                                            }
                                    )
                                }
                         </select>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={SubmitForm}>
                Submit
            </button>
        </form>
    )
}