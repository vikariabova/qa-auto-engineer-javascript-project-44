import _ from 'lodash';
import readlineSync from 'readline-sync';

const game = (messageQuestion, generateQuestion, answer) => {
    console.log('Welcome to the Brain Games!');
    let name = readlineSync.question('May I have you name? ');    
    console.log(`Hello, ${name}!`);
    console.log(messageQuestion());    

    let i = 1;
    let answerCorrect = '';
    let answerUser = '';
    let question = '';

    while (i <= 3) {
        question = generateQuestion();        
        console.log(`Question: ${question}`);
        answerCorrect = answer(question).toString();

        answerUser = readlineSync.question('Your answer: '); 
        if (answerCorrect === answerUser) {
            console.log('Correct!');
            i += 1;           
        } else {
            console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
            return `Let's try again, ${name}!`;
        }         
    }

    if (i > 3) {
        return `Congratulations, ${name}!`;
    }
}

export default game;