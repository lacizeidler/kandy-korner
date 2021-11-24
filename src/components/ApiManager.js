// employees.js
export const GetEmployees = () => {
    return fetch("http://localhost:8088/employees")
            .then(res => res.json())
}

//customers.js 
export const GetCustomers = () => {
    return fetch("http://localhost:8088/customers")
    .then(res => res.json())
}

// employeeForm.js 
// locations.js
export const GetLocations = () => {
    return fetch("http://localhost:8088/locations")
    .then(res => res.json())
}

// MyOrders.js
export const GetProducts = () => {
    return fetch("http://localhost:8088/products")
    .then(response => response.json())
}