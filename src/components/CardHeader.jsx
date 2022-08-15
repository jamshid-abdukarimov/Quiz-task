import React from "react";

const CardHeader = React.memo(({ currentQues, tests }) => {
  return (
    <div className="card-header">
      <h4>
        {currentQues + 1}. {tests[currentQues]?.question}
      </h4>
    </div>
  );
});

export default CardHeader;
