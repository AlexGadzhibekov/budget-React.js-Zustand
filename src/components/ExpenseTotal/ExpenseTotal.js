import React from "react";
import AppZustand from "../AppZustand/AppZustand";

const ExpenseTotal = () => {
  const { expenses } = AppZustand();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
