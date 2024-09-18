interface Props {
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isComponentVisible: boolean;
}

const HeaderSection = ({
  setIsComponentVisible,
  isComponentVisible,
}: Props) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold ">Expense Tracker</h1>
      <button
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className="border-2 border-[#63b3ed] text-black text-lg py-1 px-3 rounded-md hover:text-white hover:bg-[#63b3ed]"
      >
        Add Expense
      </button>
    </div>
  );
};

export default HeaderSection;
