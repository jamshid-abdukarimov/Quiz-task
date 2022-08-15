import {
  GET_TESTS,
  SET_CATEGORY,
  SET_CURRENT_QUES,
  SET_QUESNUMBER,
  SET_RESULT,
  SET_TESTS_VALUES,
  SET_TO_FINISH,
} from "./actionTypes";

export const setQuesNumAction = (payload) => ({
  type: SET_QUESNUMBER,
  payload,
});
export const setCategoryAction = (payload) => ({ type: SET_CATEGORY, payload });
export const getTestsAction = (payload) => ({ type: GET_TESTS, payload });
export const setCurrentQues = (payload) => ({
  type: SET_CURRENT_QUES,
  payload,
});
export const setResult = (payload) => ({ type: SET_RESULT, payload });
export const setTestsValues = (payload) => ({
  type: SET_TESTS_VALUES,
  payload,
});
export const setToFinish = (payload) => ({ type: SET_TO_FINISH, payload });
