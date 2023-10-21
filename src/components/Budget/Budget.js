import React, { useState } from "react";
import EditBudget from "../EditBudget/EditBudget";
import ViewBudget from "../ViewBudget/ViewBudget";
import AppZustand from "../AppZustand/AppZustand";

const Budget = () => {
  const { budget, setBudget } = AppZustand();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    setBudget(value);
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
