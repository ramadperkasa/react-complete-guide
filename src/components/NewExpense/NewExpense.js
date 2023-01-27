import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const onShowFormHandler = () => {
    setIsShowForm(true);
  };

  const onHideFormHandler = () => {
    setIsShowForm(false);
  };

  return (
    <div className="new-expense">
      {!isShowForm && (
        <button onClick={onShowFormHandler}>Add new Expense</button>
      )}
      {isShowForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onHideFormHandler={onHideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
