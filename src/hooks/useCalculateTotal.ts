import { Expense } from "../App";

const useCalculateTotal = (expenses: Expense[]): number => {
  return expenses.reduce((acc, cur) => acc + cur.amount, 0);
};

export default useCalculateTotal;
