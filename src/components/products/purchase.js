import { useHistory } from "react-router"
//? Leah showed me this but im not sure whats its doing exactly? From the productLocations module.
export const Purchases = ({ productLocationId }) => {
    const history = useHistory()

    const SubmitPurchase = (event) => {
        event.preventDefault()
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productLocationId: productLocationId
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }
        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(response => response.json())
            .then(() => {
                history.push("/purchases")
            })
    }
    return (
        <>
            <button className="purchaseButton"
                onClick={
                    SubmitPurchase
                }
            >Purchase</button>
        </>
    )
}