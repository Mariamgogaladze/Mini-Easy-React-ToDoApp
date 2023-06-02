import React from "react";
import "./summarybtn.css";

const SummaryBtn = ({
  completedTasks,
  uncompletedTasks,
  totalTasks,
  handleSummaryBtnClick,
  handleCloseBtnClick,
  summaryVisible,
}) => {
  const handleSummaryDivClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="summary" onClick={handleSummaryBtnClick}>
      <button className="summaryBtn">Task Summary</button>
      {summaryVisible && (
        <>
          <div className="summaryDiv" onClick={handleSummaryDivClick}>
            <div className="sectionsdiv">
              <section className="CompletedTask">
                <h2>Completed Tasks</h2>
                <h4>
                  Bravo! You've accomplished{" "}
                  <span className="completedspan">{completedTasks}</span> tasks
                  and collected{" "}
                  <span className="completedspan">{completedTasks}</span>{" "}
                  well-deserved stars. Your determination and success are truly
                  inspiring!
                </h4>
              </section>
              <section className="UncompletedTasks">
                <h2>Uncompleted Tasks</h2>
                <h4>
                  Keep going! There are{" "}
                  <span className="uncompletedtask">{uncompletedTasks}</span>{" "}
                  tasks waiting for your attention. With your dedication, you'll
                  soon conquer them all and shine even brighter!
                </h4>
              </section>
              <section className="NumberofTasks">
                <h2>
                  Number of Tasks :{" "}
                  <span className="totaltask">{totalTasks}</span>{" "}
                </h2>
              </section>
              <button onClick={handleCloseBtnClick} className="close">
                close
              </button>
              </div>
          </div>
          <div className="overlay"></div>
        </>
      )}
    </div>
  );
};

export default SummaryBtn;
