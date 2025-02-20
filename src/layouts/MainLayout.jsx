// router-dom
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-jost mx-auto flex gap-[30px] w-full mt-[94px] ">
      <Outlet />
    </div>
  );
}

export default MainLayout;
