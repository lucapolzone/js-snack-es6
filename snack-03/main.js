const containerElement = document.getElementById("container");


const racingBikes = [
  { 
    name: "BiciGialla", 
    weight: 7.2
  },
  { 
    name: "BiciRossa", 
    weight: 7.5 
  },
  { name: "BiciArancione", 
    weight: 7 
  },
  { name: "BiciBlu", 
    weight: 7.3 
  },
  { name: "BiciVerde", 
    weight: 7.4 
  }
];

let [lighterBike] = racingBikes;

racingBikes.forEach((bike) => {
  if (bike.weight < lighterBike.weight) lighterBike = bike;
});

const {name, weight} = lighterBike;

console.log(`La bicicletta ${name} pesa ${weight} kg ed è la più leggera`);

containerElement.innerHTML = `<h1>La bicicletta "${name}" pesa ${weight} kg ed è la più leggera</h1>`