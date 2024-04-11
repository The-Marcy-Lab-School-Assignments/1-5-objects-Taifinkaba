const coolGreeting = (person) => {
  let peep = person.name.toUpperCase();
  if(person.isCool === true){
    return `What is UP ${peep}? How you been doin'?`;
  }else{
    return `Greetings ${person.name}, how have you been lately?`;
  }
};
// console.log(coolGreeting());


const haveBirthday = (person) => {
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
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
