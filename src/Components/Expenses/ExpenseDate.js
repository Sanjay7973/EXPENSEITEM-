import React from 'react'

import './ExpenseDate.css'
function ExpenseDate(props){
    
    if (!props.date) {
        return <div>No date provided</div>;
    }
    let month=props.date.toLocaleString('en-us',{month:'long'})
    let year=props.date.getFullYear()
    let day=props.date.toLocaleString('en-us',{day:'2-digit'})
    return(
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
       </div>
    )
}
export default ExpenseDate;