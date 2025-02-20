import React from "react";
import ButtonTop from "./ButtonTop";
import SecondaryButton from "./SecondaryButton";

function FeedbackListItem() {
  return (
    <div className="px-8 bg-white rounded-[10px] py-7 flex relative">
      <ButtonTop top="112" />
      <div className="ml-10 items-left">
        <h2 className="text-[#3A4374] font-bold text-[18px] mb-1">
          Add tags for solutions
        </h2>
        <p className="mb-3 text-[#647196]">
          Easier to search for solutions based on a specific stack.
        </p>
        <SecondaryButton name="Enhancement" />
      </div>
      <div className="absolute flex items-center text-gray-500 right-8 top-[64px] bottom-[64px]">
        <span className="text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            fill="none"
          >
            <path
              fill="#CDD2EE"
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
            />
          </svg>
        </span>
        <span className="ml-1 font-bold">2</span>
      </div>
    </div>
  );
}

export default FeedbackListItem;
