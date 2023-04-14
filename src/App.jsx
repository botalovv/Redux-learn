import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)
  console.log(cash);

  const addCash = (cash) => {
          dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
      dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
      const customer = {
          name,
          id: Date.now(),
      }
      dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
      dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App" style={{padding: '30px 30px',}}>
      <div style={{display: "flex"}}>
          <div style={{fontSize: 36, marginRight: 10}}>{cash}</div>
          <button onClick={() => addCash(Number(prompt('Какую сумму вы хотите добавить?')))}>Положить деньги</button>
          <button onClick={() => getCash(+prompt('Какую сумму вы хотите снять?'))}>Снять деньги</button>
          <button onClick={() => addCustomer(prompt('Введите имя нового пользователя'))}>Добавить клиента</button>
          {/*<button onClick={() => (prompt('Какую сумму вы хотите снять?'))}>Удалить клиента</button>*/}
      </div>
        {customers.length > 0 ?
            <div>
                {customers.map(customer =>
                    <div onClick={() => removeCustomer(customer)}>
                        Пользователь {customer.name}
                    </div>)}
            </div>
            :
            <div>
                Клиенты отсутствуют
            </div>
        }
    </div>
  );
}

export default App;
