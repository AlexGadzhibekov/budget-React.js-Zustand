import React from "react";
import { TiDelete } from "react-icons/ti";
import AppZustand from "../AppZustand/AppZustand";

const ExpenseItem = (props) => {
  const { deleteExpense } = AppZustand();

  const handleDeleteExpense = () => {
    deleteExpense(props.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span
          className="badge badge-primary badge-pill mr-3"
          style={{ color: "#fff", background: "#0d6efd" }}
        >
          $ {props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};
export default ExpenseItem;
