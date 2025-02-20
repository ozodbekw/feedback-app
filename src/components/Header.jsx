// components
import ButtonTop from "./ButtonTop";
import SecondaryButton from "./SecondaryButton";

// router-dom
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="pl-6 pt-[62px]  w-[255px] h-[137px] bg-radial-gradient rounded-[10px] text-left">
        <h2 className="font-bold text-white text-[20px] ">Frontend Mentor</h2>
        <p className="font-medium text-white">Feedback Board</p>
      </div>
      <div className="p-6 pb-[14px] w-[255px]  bg-white rounded-[10px]">
        <SecondaryButton name={"All"} />
        <SecondaryButton name={"UI"} />
        <SecondaryButton name={"UX"} />
        <SecondaryButton name={"Enhancement"} />
        <SecondaryButton name={"Bug"} />
        <SecondaryButton name={"Feature"} />
      </div>
      <div className="p-6  w-[255px]  bg-white rounded-[10px] text-left">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-[#3A4374] text-[20px] ">Roadmap</h2>
          <a
            href="#"
            className="underline text-[#4661E6] font-semibold text-[13px]"
          >
            View
          </a>
          {/* <Link
            to="/roadmap"
            className="underline text-[#4661E6] font-semibold text-[13px]"
            href="#"
          >
            View
          </Link> */}
        </div>
        <ul className="flex flex-col gap-2">
          <li className="pl-6 flex justify-between items-center relative text-[#647196]">
            <span className="w-2 h-2 absolute left-0 bg-[#F49F85] rounded-full"></span>
            Planned <span className="font-bold">2</span>
          </li>
          <li className="pl-6 flex justify-between items-center relative text-[#647196]">
            <span className="w-2 h-2 absolute left-0 bg-[#AD1FEA] rounded-full"></span>
            In-Progress <span className="font-bold">3</span>
          </li>
          <li className="pl-6 flex justify-between items-center relative text-[#647196]">
            <span className="w-2 h-2 absolute left-0 bg-[#62BCFA] rounded-full"></span>
            Live <span className="font-bold">1</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
