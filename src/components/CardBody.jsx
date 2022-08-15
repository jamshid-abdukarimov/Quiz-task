import React from "react";

const CardBody = React.memo(
  ({ chooseOption, testsValues, currentQues, handleSetTestsValues }) => {
    return (
      <ul className="card-body answers list-unstyled px-0 mb-0">
        {testsValues[currentQues]?.answers.map((ans, i) => (
          <li
            onClick={() =>
              chooseOption(
                ans,
                i,
                currentQues,
                testsValues,
                handleSetTestsValues
              )
            }
            className={`answer p-2 ${
              testsValues[currentQues]?.status <= 1
                ? testsValues[currentQues]?.selectedAns === i
                  ? "active"
                  : ""
                : testsValues[currentQues]?.status === 2
                ? testsValues[currentQues]?.selectedAns === i
                  ? "danger"
                  : ""
                : testsValues[currentQues]?.trueAns === ans
                ? "success"
                : ""
            } ${
              testsValues[currentQues]?.status === 2 &&
              testsValues[currentQues]?.trueAns === ans
                ? "success"
                : ""
            }`}
            key={i}
          >
            {ans}
          </li>
        ))}
      </ul>
    );
  }
);

export default CardBody;
