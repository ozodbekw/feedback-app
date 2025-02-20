// components
import Button from "../components/Button";
import Header from "../components/Header";
import FeedbackList from "../components/FeedbackList";

function Home() {
  return (
    <div className="font-jost mx-auto flex gap-[30px] container ">
      <Header />
      <div>
        <div className="bg-[#373F68] py-[23px] pl-6 pr-4 rounded-[10px] w-full max-w-[835px]">
          <div className="flex items-center">
            <img src="./bulb 2.svg" alt="logo" />
            <h2 className="ml-4 mr-[38px] text-white font-bold text-[18px]">
              6 Suggestions
            </h2>
            <div className="dropdown mr-[230px]">
              <div tabIndex={0} role="button" className="text-[#F2F4FE]">
                Sort by : <span className="font-bold">Most Upvotes</span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 top-[55px] absolute shadow-lg"
              >
                <li className="text-[#647196] hover:text-[#AD1FEA] px-24px py-12px">
                  <a> Most Upvotes</a>
                </li>
                <li className="text-[#647196] hover:text-[#AD1FEA] px-24px py-12px">
                  <a>Least Upvotes</a>
                </li>
                <li className="text-[#647196] hover:text-[#AD1FEA] px-24px py-12px">
                  <a>Most Comments</a>
                </li>
                <li className="text-[#647196] hover:text-[#AD1FEA] px-24px py-12px">
                  <a>Least Comments</a>
                </li>
              </ul>
            </div>
            <Button name="+ Add Feedback" />
          </div>
        </div>
        <FeedbackList />
      </div>
    </div>
  );
}

export default Home;
