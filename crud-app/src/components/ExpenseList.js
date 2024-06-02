import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map(expense => (
          <ExpenseItem 
            key={expense.id} 
            expense={expense} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit} 
          />
        ))}
      </ul>
      <button className='btn' onClick={() => handleDelete(expenses.map(expense => expense.id))}>
        목록 지우기
      </button>
    </>
  );
}

export default ExpenseList;
