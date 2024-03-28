import React from 'react'

import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props){
    const handleDeleteClick = () => {
        props.onDelete(); // Call the onDelete function passed from the parent component
      };
    return(
        <div className='expense-item'>
        <ExpenseDate date={new Date(props.date)}/>
         <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
         </div>
         <button className='delete_button' onClick={handleDeleteClick}>Delete item</button>
        </div>
    )
}

export default ExpenseItem