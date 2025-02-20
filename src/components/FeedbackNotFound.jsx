import Button from "./Button";

function FeedbackNotFound() {
  return (
    <div className="bg-white px-[209px] py-[110px] rounded-[10px] flex flex-col items-center gap-[53px]">
      <img src="./notFound.png" alt="" />
      <div className="flex flex-col items-center">
        <h2 className="text-[#3A4374] font-bold text-[24px]">
          There is no feedback yet.
        </h2>
        <p className="text-[#647196] text-[16px] mb-[48px] mt-4">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Button name="+ Add Feedback" />
      </div>
    </div>
  );
}

export default FeedbackNotFound;
