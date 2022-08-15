export const getValues = (tests) => {
  let values = [];
  tests.forEach((_, index) => {
    let allAns = tests.length && [...tests[index]?.incorrect_answers];
    allAns.splice(
      Math.round(Math.random() * 3),
      0,
      tests[index]?.correct_answer
    );
    let obj = {
      status: 0,
      selectedAns: null,
      answers: allAns,
      answer: "",
      trueAns: tests[index].correct_answer,
    };
    values.push(obj);
  });

  return values;
};

export const chooseOption = (
  ans,
  index,
  currentQues,
  testsValues,
  handleSetTestsValues
) => {
  if (testsValues[currentQues].status > 1) {
    return;
  }
  let newTestsValues = [...testsValues];
  newTestsValues[currentQues].selectedAns = index;
  newTestsValues[currentQues].status = 1;
  newTestsValues[currentQues].answer = ans;
  handleSetTestsValues(newTestsValues);
};
