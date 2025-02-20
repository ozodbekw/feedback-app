function SecondaryButton({ name }) {
  return (
    <button className="rounded-[10px] px-4 py-[5px] font-semibold text-[13px]  text-[#4661E6] bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] active:text-white  ml-2 mb-[14px] ease-linear ">
      {name}
    </button>
  );
}

export default SecondaryButton;
