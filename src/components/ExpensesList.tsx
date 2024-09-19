import { Expense } from "../App";
import useCalculateTotal from "../data/useCalculateTotal";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
  filteredExpenses: Expense[];
  selectedCategory: string;
}

const ExpensesList = ({
  deleteExpense,
  expenses,
  filteredExpenses,
  selectedCategory,
}: Props) => {
  const total = useCalculateTotal(
    selectedCategory ? filteredExpenses : expenses
  );
  const expensesList = selectedCategory ? filteredExpenses : expenses;
  return (
    <div className="col-span-3">
      <div className="my-4 w-full">
        <div className="p-2 border-y-2 border-gray-300 grid grid-cols-6 gap-2">
          <p className="col-span-2 font-bold">Title</p>
          <p className="font-bold">Category</p>
          <p className="font-bold">Date Added</p>
          <p className="font-bold">Amount</p>
          <p></p>
        </div>
        {expensesList.map((expense) => (
          <div
            key={expense.id}
            className="p-2 border-b-2 border-gray-300 grid grid-cols-6 gap-2"
          >
            <p className="col-span-2 break-words">{expense.title}</p>
            <p className="flex items-center">{expense.category}</p>
            <p className="flex items-center">{expense.dateAdded}</p>
            <p className="flex items-center">{expense.amount}</p>
            <div>
              <button
                onClick={() => deleteExpense(expense.id)}
                className="bg-red-600 text-white px-2 py-1 rounded-sm"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="font-bold text-2xl">Total: ${total}</p>
      </div>
    </div>
  );
};

export default ExpensesList;
