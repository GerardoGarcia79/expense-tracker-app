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

const bgColors = initialExpenses.map(() => useRandomColorGenerator());
console.log(bgColors);

export const allChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 200],
      backgroundColor: bgColors,
      hoverOffset: 4,
    },
  ],
};
