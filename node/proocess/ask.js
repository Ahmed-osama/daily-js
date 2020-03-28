const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const questions = [
  'what is ur name?',
  'where do you live?',
  'do you like node',
];
function collectAnswers(questionsArr, onComplete) {
  const answers = [];
  const [firstQuestion] = questionsArr;
  const onAnswerQuestion = (answer) => {
    answers.push(answer);
    if (answers.length < questionsArr.length) {
      rlInterface.question(questionsArr[answers.length], onAnswerQuestion);
    } else {
      onComplete(questionsArr, answers);
    }
  };
  rlInterface.question(firstQuestion, onAnswerQuestion);
}
collectAnswers(questions, (questions, answers) => {
  console.log('thank you for answers . ');
  console.log(answers);
  process.exit();
});
