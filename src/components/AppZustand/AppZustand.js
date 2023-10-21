import create from "zustand";

const AppZustand = create((set) => ({
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 400 },
    { id: 13, name: "holiday", cost: 450 },
    { id: 14, name: "car service", cost: 600 },
  ],
  setBudget: (newBudget) => set({ budget: newBudget }),
  addExpense: (newExpense) =>
    set((state) => ({ expenses: [...state.expenses, newExpense] })),
  deleteExpense: (expenseId) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== expenseId),
    })),
}));

export default AppZustand;
