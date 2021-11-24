import React from "react"
import { Route } from "react-router"
import { Customers } from "./customers/customers"
import { EmployeeForm } from "./employees/employeeForm"
import { Employees } from "./employees/employees"
import { Locations } from "./locations/locations"
import { ProductLocations } from "./locations/productLocations"
import { MyOrders } from "./products/myOrders"
import { Products } from "./products/products"

// This is a component
//? What is the difference between the exact path and the regular path? 
//? How would you define a route tag? In a professional smarty pants way. 
//Component being invoked in JSX
{/* <Locations/> */}
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Locations/>
            </Route>
            <Route exact path="/products">
                <Products/>
            </Route>
            <Route exact path="/employees">
                <Employees />
            </Route>
            <Route exact path="/customers">
                <Customers />
            </Route>
            <Route exact path="/purchases">
                <MyOrders/>
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/products/:locationId(\d+)">
                <ProductLocations />
            </Route>
        </>
    )
}