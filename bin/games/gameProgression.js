import _ from "lodash";
import game from "../../src/index.js";

const messageQuestion = () => {
  return "What number is missing in the progression?";
};

const generateQuestion = () => {
  let allNumbers = [];
  let randomNumber = _.random(1, 30);
  let randomStep = _.random(1, 6);

  for (let i = 0; i < _.random(5, 10); i++) {
    randomNumber = randomNumber + randomStep;
    allNumbers.push(randomNumber);
  }

  let skipPosition = "..";
  let randomPosition = _.random(1, allNumbers.length) - 1;
  allNumbers[randomPosition] = skipPosition;

  let question = allNumbers
    .map((num) => (num === skipPosition ? skipPosition : num))
    .join(" ");
  return question;
};

const answer = (numbers) => {
  numbers = numbers.split(" ");
  let i = 0;
  let skipPosition = "";

  while (i < numbers.length) {
    if (numbers[i] === "..") {
      skipPosition = i;
      break;
    } else {
      i += 1;
    }
  }

  let n1 = "";
  let n2 = "";
  let answer = "";

  if (skipPosition === 0) {
    n1 = parseInt(numbers[skipPosition + 1]);
    n2 = parseInt(numbers[skipPosition + 2]);
    return (answer = n1 - (n2 - n1));
  } else if (skipPosition === numbers.length - 1) {
    n1 = parseInt(numbers[skipPosition - 2]);
    n2 = parseInt(numbers[skipPosition - 1]);
    return (answer = n2 + (n2 - n1));
  } else {
    n1 = parseInt(numbers[skipPosition - 1]);
    n2 = parseInt(numbers[skipPosition + 1]);
    answer = n1 + (n2 - n1) / 2;
    return answer;
  }
};

export default () => game(messageQuestion, generateQuestion, answer);
