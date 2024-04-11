const coolGreeting = (person, isCool) => {
  person = {
    name: 'Sara',
    bio: 'Too cool 4 skool.',
    age: 32,
    isCool: true
  }
  let peep = person.name.toUpperCase();
  if(isCool === true){
    return `What is UP ${peep}? How you been doin'?`;
  }else{
    return `Greetings ${person.name}, how have you been lately?`;
  }
};
// console.log(coolGreeting());


const haveBirthday = () => {
};

const becomeSecretAgent = () => {
};

const carMaker = () => {
};

const weAreNotFriends = () => {
};

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
