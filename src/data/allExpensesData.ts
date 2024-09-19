import { Expense } from "../App";
import useRandomColorGenerator from "../hooks/useRandomColorGenerator";

export const initialExpenses = [
  {
    id: 1,
    title: "Videogames",
    category: "Entertainment",
    dateAdded: "2017-08-20",
    amount: 1200,
  },
  {
    id: 2,
    title: "Meat",
    category: "Groceries",
    dateAdded: "2018-09-30",
    amount: 400,
  },
  {
    id: 3,
    title: "Medicine",
    category: "General",
    dateAdded: "2020-12-12",
    amount: 100,
  },
];

const allExpensesData = (data: Expense[]) => {
  const bgColors = data.map(() => useRandomColorGenerator());
  const titles = data.map((expense) => expense.title);
  const amounts = data.map((expense) => expense.amount);

  return {
    labels: titles,
    datasets: [
      {
        data: amounts,
        backgroundColor: bgColors,
        hoverOffset: 4,
      },
    ],
  };
};

export default allExpensesData;

// TODO: Change initialExpenses to expenses at the time
// TODO: Create another data file with filteredExpenses at the time for mainSection chart
