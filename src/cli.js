import readlineSync from "readline-sync";

const name = () => {
  let nameUser = "";
  nameUser = readlineSync.question("May I have you name? ");
  return nameUser;
};

const brainGames = () => {
  console.log("Welcome to the Brain Games!");
  return `Hello, ${name()}!`;
}

export default brainGames;