import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const getFeedback = () => {
  const savedFeedback = localStorage.getItem("feedback");
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [feedback, setFeedback] = useState(getFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <div>
        <Description />
        <Options
          onUpdate={updateFeedback}
          totalFeedback={totalFeedback}
          onReset={resetFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positive={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
