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

// TODO: Change initialExpenses to expenses at the time
// TODO: Create another data file with filteredExpenses at the time for mainSection chart
const bgColors = initialExpenses.map(() => useRandomColorGenerator());
const titles = initialExpenses.map((expense) => expense.title);
const amounts = initialExpenses.map((expense) => expense.amount);

export const allChartData = {
  labels: titles,
  datasets: [
    {
      data: amounts,
      backgroundColor: bgColors,
      hoverOffset: 4,
    },
  ],
};
