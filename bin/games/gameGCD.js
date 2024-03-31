import _ from "lodash";
import game from "../../src/index.js";

const messageQuestion = () => {
  return "Find the greatest common divisor of given numbers.";
};

const generateQuestion = () => {
  let number1 = _.random(1, 100);
  let number2 = _.random(1, 100);
  let question = `${number1} ${number2}`;
  return question;
};

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const answer = (n) => {
  n = n.split(" ");
  n = n.map((str) => parseInt(str));
  let n1 = n[0];
  let n2 = n[1];
  let answer = gcd(n1, n2);
  return answer;
};

export default () => game(messageQuestion, generateQuestion, answer);
