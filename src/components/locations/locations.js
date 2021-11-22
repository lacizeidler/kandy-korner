import { useEffect, useState  } from "react"
import { useHistory } from "react-router"
import "./locations.css"

export const Locations = () => {
    const [locations, modifyLocations] = useState([])

    const history = useHistory()

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
        <>
            {
                locations.map(
                    (locationObject) => {
                        return <div className
                        ="locations" key={locationObject.id}>
                          <p>City: {locationObject.name}</p>
                          <p>Address: {locationObject.address}</p>
                          <p>Square Footage: {locationObject.squareFootage}</p>
                          <p>Handicap Accessible: {locationObject.handicapAccessible}</p>
                          <button className="shoppingLocation" 
                            onClick={(
                                () => {
                                   history.push(`/products/${locationObject.id}`)
                                }
                            )}
                          >Shop at this Location</button>
                            </div>
                    }
                )
            }
        </>
    )
}