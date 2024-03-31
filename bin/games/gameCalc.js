import _ from 'lodash';
import game from '../../src/index.js'

const messageQuestion = () => {return 'What is the result of the expression?'};

const generateQuestion = () => {
    let number1 = _.random(1, 20); 
    let operator = "-+*"
    let operatorRandom = operator[_.random(0, 2)];
    let number2 = _.random(1, 20); 
    let question = `${number1} ${operatorRandom} ${number2}`;
    return question;
};

const answer = (n) => {
    let answer = eval(n);
    return answer;
};

export default () => game(messageQuestion, generateQuestion, answer); 