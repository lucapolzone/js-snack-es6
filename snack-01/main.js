const vips = [
  'Dwayne Johnson',
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];



const newArray = vips.map((nome, index) => {
  return {
    tavolo: "Tavolo vip",
    nome: nome,
    posto: index + 1
  }
});

console.log(newArray);


