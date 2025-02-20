function Button({ name }) {
  return (
    <button className="font-bold text-[14px] text-[#F2F4FE] px-6 py-3 bg-[#AD1FEA] rounded-[10px] w-[173px] btn hover:bg-[#C75AF6] border-0">
      {name}
    </button>
  );
}

export default Button;
