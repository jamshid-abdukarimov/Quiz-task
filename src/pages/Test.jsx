import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CardBody from "../components/CardBody";
import CardFooter from "../components/CardFooter";
import CardHeader from "../components/CardHeader";
import Modal from "../components/Modal";
import { chooseOption, getValues } from "../helpers";
import { setModal } from "../redux/actions/modal";
import {
  setCurrentQues,
  setTestsValues,
  setToFinish,
} from "../redux/actions/tests";
import "./test.scss";

const Test = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector(({ modal }) => modal);
  const { tests, currentQues, result, testsValues, toFinish } = useSelector(
    ({ tests }) => tests
  );

  const handleSetTestsValues = useCallback((values) => {
    dispatch(setTestsValues(values));
  }, []);

  useEffect(() => {
    handleSetTestsValues(getValues(tests));
  }, []);

  if (!tests.length) return <Redirect to="/" />;

  const finishHandler = () => {
    let newTestsValues = [...testsValues];
    newTestsValues.map((test) => {
      return test.status > 1 ? test : (test.status = 2);
    });
    dispatch(setToFinish(tests.length));
    handleSetTestsValues(newTestsValues);
    dispatch(setModal(true));
  };

  return (
    <>
      {modal && <Modal result={result} testsCount={tests.length} />}
      {testsValues.length && (
        <div className="test-page">
          <div className="row">
            <div className="col-md-8 offset-md-2 my-2 d-flex justify-content-between">
              <span className="h4">
                {currentQues + 1} / {tests.length}
              </span>
              <button
                className="btn btn-danger"
                onClick={finishHandler}
                disabled={toFinish === tests.length}
              >
                Finish
              </button>
            </div>
            <div className="col-md-6 mx-auto offset-md-2 my-2 d-flex justify-content-between">
              <ul className="pagination flex-wrap justify-content-center">
                {tests.map((_, i) => (
                  <li key={i} className="page-item">
                    <span
                      onClick={() => dispatch(setCurrentQues(i))}
                      className={`page-link rounded-0 ${
                        testsValues[i]?.status === 1 ? "bglight" : ""
                      } ${
                        testsValues[i]?.status === 2
                          ? "bg-danger text-white"
                          : ""
                      } ${
                        testsValues[i]?.status === 3
                          ? "bg-success text-white"
                          : ""
                      } ${i === currentQues ? "active" : ""}`}
                    >
                      {i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-8 offset-md-2 my-2 text-start">
              <div className="card">
                <CardHeader tests={tests} currentQues={currentQues} />
                <CardBody
                  currentQues={currentQues}
                  testsValues={testsValues}
                  chooseOption={chooseOption}
                  handleSetTestsValues={handleSetTestsValues}
                />
                <CardFooter
                  currentQues={currentQues}
                  tests={tests}
                  toFinish={toFinish}
                  result={result}
                  handleSetTestsValues={handleSetTestsValues}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
