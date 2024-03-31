import _ from "lodash";
import readlineSync from "readline-sync";

const gameParity = () => {
  let name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  let questionNumber = 0;
  let answerCorrect = "";
  let answerUser = "";

  while (i <= 3) {
    questionNumber = _.random(1, 100);
    console.log(`Question: ${questionNumber}`);

    if (questionNumber % 2 === 0) {
      answerCorrect = "yes";
    } else {
      answerCorrect = "no";
    }

    answerUser = readlineSync.question("Your answer: ");
    if (answerCorrect === answerUser) {
      console.log("Correct!");
      i += 1;
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (i > 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameParity;
