import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/actions/modal";

import { setResult, setToFinish, setCurrentQues } from "../redux/actions/tests";
import Button from "./Button";

const CardFooter = React.memo(({ handleSetTestsValues }) => {
  const dispatch = useDispatch();
  const { tests, currentQues, result, testsValues, toFinish } = useSelector(
    ({ tests }) => tests
  );
  const markAnswer = React.useCallback(() => {
    dispatch(setToFinish(toFinish + 1));
    if (
      testsValues[currentQues].trueAns ===
      testsValues[currentQues].answers[testsValues[currentQues].selectedAns]
    ) {
      let newTestsValues = [...testsValues];
      newTestsValues[currentQues].status = 3;
      handleSetTestsValues(newTestsValues);
      dispatch(setResult(result + 1));
    } else {
      let newTestsValues = [...testsValues];
      newTestsValues[currentQues].status = 2;
      handleSetTestsValues(newTestsValues);
    }
    if (toFinish === tests.length - 1) {
      dispatch(setModal(true));
    }
  }, [currentQues, toFinish, testsValues, tests, result]);

  const handlePrevious = React.useCallback(() => {
    dispatch(setCurrentQues(currentQues - 1));
  }, [currentQues]);
  const handleNext = React.useCallback(() => {
    dispatch(setCurrentQues(currentQues + 1));
  }, [currentQues]);

  return (
    <div className="card-footer d-flex justify-content-between">
      <Button
        onClick={handlePrevious}
        disabled={currentQues === 0}
        className="previous"
        type="primary"
      >
        Previous
      </Button>
      <Button
        onClick={markAnswer}
        disabled={
          testsValues[currentQues]?.status > 1 ||
          testsValues[currentQues]?.selectedAns === null
        }
        className="submit"
        type="secondary"
      >
        Submit
      </Button>
      <Button
        onClick={handleNext}
        disabled={currentQues === tests.length - 1}
        className="next"
        type="primary"
      >
        Next
      </Button>
    </div>
  );
});

export default CardFooter;
