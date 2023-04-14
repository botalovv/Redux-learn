import {addManyCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => {
    return async function(dispatch) {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json();
       await dispatch(addManyCustomersAction(data))
       console.log(data)
    }
}