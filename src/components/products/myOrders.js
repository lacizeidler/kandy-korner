import { useEffect, useState } from "react/cjs/react.development"
import "./orders.css"


export const MyOrders = () => {
    const [purchases, modifyPurchases] = useState([])
    const [products, modifyProducts] = useState([])
    const currentCustomer = parseInt(localStorage.getItem("kandy_customer"))

    useEffect(() => {
        fetch(`http://localhost:8088/purchases?customerId=${currentCustomer}&_expand=productLocation`)
        .then(response => response.json())
        .then((purchases) => {
            modifyPurchases(purchases)
        })
    },
    [currentCustomer]
    )
    useEffect(() => {
        fetch("http://localhost:8088/products")
        .then(response => response.json())
        .then((products) => {
            modifyProducts(products)
        })
    },
    []
    )

    return (
        <>
                {
                    purchases.map(purchase => {
                        const foundProduct = products.find(product => product.id === purchase.productLocation?.productId) || {}
                        return <section key={`purchase--${purchase.id}`} className="purchase">
                            <p className="purchase_item">{foundProduct?.name}</p>
                            <p className="purchase_item">Price: ${foundProduct?.price}</p>
                        </section>
                    })
                }
        </>
    )
}