import _ from "lodash";
import game from "../../src/index.js";

const messageQuestion = () => {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
};

const generateQuestion = () => {
  let question = _.random(1, 100);
  return question;
};

const answer = (n) => {
  let answer = "";
  if (n % 2 === 0) {
    return (answer = "yes");
  } else {
    return (answer = "no");
  }
};

export default () => game(messageQuestion, generateQuestion, answer);
