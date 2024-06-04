export const groupQuestionData = (data) => {
    const {
      questions,
      question_types,
      answers,
      order,
    } = data;
  
    const questionsObject = questions[0];
    const questionTypesObject = question_types[0];
    const answersObject = answers[0];
    const orderObject = order[0];
  
    const groupedData = {};
  
    for (const [key, question] of Object.entries(questionsObject)) {
      groupedData[key] = {
        question: question,
        question_type: questionTypesObject[key],
        answer: answersObject[key],
        order: orderObject[key],
      };
    }
  
    return groupedData;
  };