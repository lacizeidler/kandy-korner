import { useEffect, useState  } from "react"
import "./products.css"

export const Products = () => {
    const [products, modifyProducts] = useState([])
    
    

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
            .then(res => res.json())
            .then((productsArray) => {
                modifyProducts(productsArray)
            })
        },
        []
    )
    return (
        <>
            {
                products.map(
                    (productObject) => {
                        return <div className="products" key={productObject.id}>
                            <h3>{productObject.name}</h3> 
                            <p>Price: ${productObject.price} </p>
                            <p>Product Type: {productObject.productType.type}</p>
                            </div>
                    }
                )
            }
        </>
    )
}