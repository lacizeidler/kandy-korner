import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { GetLocations } from "../ApiManager"
import "./locations.css"

export const Locations = () => {
    const [locations, modifyLocations] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            GetLocations()
                .then(modifyLocations)
        },
        []
    )
    return (
        // This are called fragments, used because JSX can only have one child tag. 
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