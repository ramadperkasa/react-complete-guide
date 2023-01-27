import React, { useState } from "react";

import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onAddFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={onAddFilterHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
