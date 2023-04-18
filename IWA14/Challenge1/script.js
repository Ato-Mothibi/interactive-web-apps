
const firstName = 'John';
const age = 35;
const myHobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

const hobby = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${myHobby}!`);
}

hobby();