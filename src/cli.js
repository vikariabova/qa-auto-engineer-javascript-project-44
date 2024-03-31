import readlineSync from "readline-sync";

const name = () => {
  let nameUser = "";
  nameUser = readlineSync.question("May I have you name? ");
  return nameUser;
};

const brainGames = () => {
  return `Hello, ${name()}!`;
}

export default brainGames;