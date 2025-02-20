function ButtonTop({ top }) {
  return (
    <button className="flex flex-col w-10 btn p-0 h-[53px] rounded-[10px] bg-[#F2F4FE] hover:bg-[#CFD7FF] active:bg-[#4661E6] active:text-white border-0  text-[#3A4374] ">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" fill="none">
        <path stroke="#4661E6" stroke-width="2" d="m1.334 6 4-4 4 4" />
      </svg>
      <span className="text-sm font-bold "> {top}</span>
    </button>
  );
}

export default ButtonTop;
