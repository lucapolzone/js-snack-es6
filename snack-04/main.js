const containerElement = document.getElementById("container")

const teams = [
  {
    name: 'Team Turtle',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Frog',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Penguin',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Hippopotamus',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Seal',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Crocodile',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Dolphin',
    score: 0,
    foul: 0,
  },
];


for (let team of teams) {
  team.score = getRandomNumber(1, 20);
  team.foul = getRandomNumber(1, 20);
}


const arrayFouls = teams.map((team) => {
//const {name, foul, score} = team;
  const {name, foul} = team;
//return {name, foul, score};
  return `<h2>Il ${name} ha fatto ${foul} falli</h2>`;
})

console.log(arrayFouls); 

containerElement.innerHTML = arrayFouls.join('');


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min); 
}
