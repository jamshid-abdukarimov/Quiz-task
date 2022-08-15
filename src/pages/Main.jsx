import React from "react";
import { questionsCategories, questionsNumbers } from "../constants";
import "./main.scss";
import axios from "../api/api";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  setCategoryAction,
  setQuesNumAction,
  getTestsAction,
  setToFinish,
  setResult,
  setCurrentQues,
} from "../redux/actions/tests";
import { useDispatch } from "react-redux";
import Select from "../components/Select";
import { useCallback } from "react";
import Button from "../components/Button";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { category, quesNumber } = useSelector(({ tests }) => tests);

  const getTests = async () => {
    await axios
      .get(`?amount=${quesNumber}&category=${category}`)
      .then(({ data }) => {
        dispatch(getTestsAction(data.results));
        dispatch(setToFinish(0));
        dispatch(setResult(0));
        dispatch(setCurrentQues(0));
      });
    history.push("/test");
  };

  const handleCategoryAction = useCallback(
    (e) => {
      dispatch(setCategoryAction(e.target.value));
    },
    [category]
  );

  const handleQuesNumsAction = useCallback(
    (e) => {
      dispatch(setQuesNumAction(e.target.value));
    },
    [quesNumber]
  );

  return (
    <div className="main-page">
      <div className="row">
        <div className="col-md-8 offset-md-2 my-2">
          <Select
            title={"Select number of questions"}
            data={questionsNumbers}
            defaultValue={quesNumber}
            onChange={handleQuesNumsAction}
          />
        </div>
        <div className="col-md-8 offset-md-2 my-2">
          <Select
            title={"Select category"}
            data={questionsCategories}
            defaultValue={category}
            onChange={handleCategoryAction}
          />
        </div>
        <div className="col-md-8 offset-md-2">
          <Button onClick={getTests} type="success" className="w-100">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
