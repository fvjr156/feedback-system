const groupQuestionsData = (data) => {
    const {
      questions,
      question_types,
      answers
    } = data;
  
    const questionsObject = questions[0];
    const questionTypesObject = question_types[0];
    const answersObject = answers[0];
  
    const groupedData = {};
  
    for (const [key, question] of Object.entries(questionsObject)) {
      groupedData[key] = {
        question: question,
        question_type: questionTypesObject[key],
        answer: answersObject[key]
      };
    }
  
    return groupedData;
  };
  
  const exampleData = {
    response_data: 6,
    respondent_email: 'villanueva.295576@marikina.sti.edu.ph',
    submit_timestamp: '2024-05-29 14:38:14Z',
    questions: [
      {
        atmosphere_rating: 'How would you rate the atmosphere of our restaurant?',
        cleanliness_rating: 'How satisfied were you with the cleanliness of our restaurant?',
        staff_rating: 'How would you rate the knowledge and professionalism of our staff?',
        dishes_quality_rating: 'Were you satisfied with the quality and taste of the dishes you ordered?',
        price_rating: 'Do you feel that our menu offers a fair price for the quality of food served?',
        recommend_rating: 'Would you recommend our restaurant to others?',
        overall_rating: 'Overall, how satisfied were you with your dining experience at our restaurant?',
        suggestions: 'Do you have any suggestions for how we can improve our restaurant?'
      }
    ],
    question_types: [
      {
        atmosphere_rating: 'mch_d',
        cleanliness_rating: 'mch_d',
        staff_rating: 'mch_d',
        dishes_quality_rating: 'mch_p',
        price_rating: 'mch_p',
        recommend_rating: 'mch_b',
        overall_rating: 'mch_b',
        suggestions: 'ans_s'
      }
    ],
    answers: [
      {
        atmosphere_rating: 'Good',
        cleanliness_rating: 'Somewhat satisfied',
        staff_rating: 'Very good',
        dishes_quality_rating: 'Satisfied',
        price_rating: 'Agree',
        recommend_rating: 'Probably',
        overall_rating: 'Somewhat satisfied',
        suggestions: 'none'
      }
    ]
  };
  
  const result = groupQuestionsData(exampleData);
  console.log(result);
  