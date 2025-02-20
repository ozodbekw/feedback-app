import React from "react";
import FeedbackListItem from "./FeedbackListItem";
import FeedbackNotFound from "./FeedbackNotFound";

function FeedbackList() {
  return (
    <div className="flex flex-col gap-5 mt-6 pb-[129px]">
      <FeedbackNotFound />
    </div>
  );
}

export default FeedbackList;
