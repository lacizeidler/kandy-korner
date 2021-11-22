import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react/cjs/react.development"
import { Purchases } from "../products/purchase"

export const ProductLocations = () => {
    const [productLocations, modifyProductLocations] = useState([])
    const { locationId } = useParams()

    useEffect (
        () => {
            fetch (`http://localhost:8088/productLocations?locationId=${locationId}&_expand=product`)
            .then(res => res.json())
            .then(
                modifyProductLocations
            )
        },
        [locationId]
    )
    return (
        <>
            {
                productLocations.map(
                    (productObject) => {
                        return <div className="products" key={productObject.id}>
                            <h3>{productObject.product.name}</h3> 
                            <p>Price: ${productObject.product.price} </p>
                           <Purchases productLocationId = {productObject.id}/>
                            </div>
                    }
                )
            }
        </>
    )
}