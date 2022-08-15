import { questionsCategories, questionsNumbers } from "../../constants";
import {
  SET_CATEGORY,
  SET_QUESNUMBER,
  GET_TESTS,
  SET_CURRENT_QUES,
  SET_RESULT,
  SET_TESTS_VALUES,
  SET_TO_FINISH,
} from "../actions/actionTypes";

const initialState = {
  currentQues: 0,
  category: questionsCategories[0].id,
  quesNumber: questionsNumbers[0].id,
  result: 0,
  testsValues: [],
  tests: [],
  toFinish: 0,
};

export const tests = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTS_VALUES:
      return { ...state, testsValues: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_QUESNUMBER:
      return { ...state, quesNumber: action.payload };
    case GET_TESTS:
      return { ...state, tests: action.payload };
    case SET_CURRENT_QUES:
      return { ...state, currentQues: action.payload };
    case SET_RESULT:
      return { ...state, result: action.payload };
    case SET_TO_FINISH:
      return { ...state, toFinish: action.payload };
    default:
      return state;
  }
};
