import React, { useEffect, useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let Dummy_Expense = [];
function App() {
  function fetchData(){
    fetch("http://localhost:3000/expense/findAllExpense").then((data) => {
      data.json().then((realdata) => {
        setExpense(realdata);
      });
    });
  }
  useEffect(() => {
  fetchData()
  }, []);

  const [expenses, setExpense] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    fetch("http://localhost:3000/expense/addExpense", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response)=>{
      fetchData(response)
    })
  };
  const deleteExpenseHandler = (id) => {
    fetch(`http://localhost:3000/expense/${id}`, {
      method: "DELETE",
    }).then((response) => {
      fetchData(response)
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} onDeleteExpense={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
