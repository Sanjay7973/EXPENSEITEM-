import React from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  const handleDelete = (id) => {
    props.onDeleteExpense(id); // Call the onDeleteExpense function passed from the parent component
  };
  return (
    <div className="expense">
      {props.item.map((expense) => (
        <div key={expense.id}>
        <ExpenseItem
        id={expense.id}
          date={expense.dateAdded}
          title={expense.title}
          amount={expense.amount}
          onDelete={() => handleDelete(expense.id)}
        />
        </div>
      ))}
    </div>
  );
}

export default Expenses;
