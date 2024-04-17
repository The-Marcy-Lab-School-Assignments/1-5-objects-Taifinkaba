/** FEEDBACK: Great job! You have all test cases passing! */
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

const carMaker = (name, maker, year) => {
  return{
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  }; 

};
// console.log(carMaker("civic","honda", 2020));

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for(let hob of person.hobbies){
    console.log(`${person.name} likes ${hob}.`);
  }
};

const getNextOpponent = (team) => {
  return team.matches.length === 0 ? null : team.matches[0].teamName;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const key = Object.keys(arr[0]);
  const key2 = [key];

  for (let i = 0; i < arr.length; i++) {
    key2.push(Object.values(arr[i]));
  }
  return key2;
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
