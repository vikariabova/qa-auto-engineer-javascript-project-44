import _ from "lodash";
import game from "../../src/index.js";

const messageQuestion = () => {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
};

const generateQuestion = () => {
  let question = _.random(1, 100);
  return question;
};

const answer = (n) => {
  if (n <= 1) {
    return (n = "no");
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return (n = "no");
    }
  }

  return (n = "yes");
};

export default () => game(messageQuestion, generateQuestion, answer);
