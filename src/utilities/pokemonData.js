const pokemon = [
  {
    name: 'Bulbasaur',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: "Ivysaur",
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  {
    name: 'Venusaur', 
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Charmander',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Charmeleon',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Charizard',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    hp: 78,
    speed: 100,
    attack: 84,
    defense: 78
  },

  {
    name: 'Squirtle',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: "Wartortle",
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Blastoise',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    hp: 79,
    speed: 78,
    attack: 83,
    defense: 100
  },

  {
    name: 'Caterpie',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Metapod',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: "Butterfree",
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: "Weedle",
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Kakuna',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Beedrill',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Pidgey',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Pidgeotto',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Pidgeot',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    hp: 83,
    speed: 101,
    attack: 80,
    defense: 75
  },

  {
    name: 'Rattata',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Raticate',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Spearow',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Fearow',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Ekans',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Arbok',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  
  {
    name: 'Pikachu',
    type: 'Electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    hp: 35,
    speed: 90,
    attack: 55,
    defense: 40
  },

  {
    name: 'Raichu',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Sandshrew',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Sandslash',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Nidoran',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  
  {
    name: 'Nidorina',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Nidorino',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: "Nidoqueen",
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Nidoking',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Clefairy',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Clefable',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Vulpix',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Ninetails',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Jigglypuff',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Wigglytuff',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Zubat',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Golbat',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Oddish',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Gloom',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Vileplume',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Paras',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Parasect',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Venonat',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Venomoth',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Diglett',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Dugtrio',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Meowth',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Persian',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Psyduck',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Golduck',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Mankey',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Primeape',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Growlithe',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Arcanine',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Poliwag',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Poliwhirl',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Poliwrath',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Abra',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Kadabra',
    type: 'Psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    hp: 40,
    speed: 105,
    attack: 35,
    defense: 30
  },

  {
    name: 'Alakazam',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Machop',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Machoke',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Machamp',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Bellsprout',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Weepinbell',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Victreebel',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Tentacool',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Tentacruel',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Geodude',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Gravler',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Golem',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Ponyta',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Rapidash',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Slowpoke',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Slowbro',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Magnemite',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Magneton',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Farfetchd',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Doduo',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Dodrio',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Seel',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Dewgong',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Grimer',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Muk',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Shellder',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Cloyster',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Gastly',
    type: 'ghost',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Haunter',
    type: 'ghost',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  
  {
    name: 'Gengar',
    type: 'ghost',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    hp: 60,
    speed: 110,
    attack: 65,
    defense: 60
  },

  {
    name: 'Onix',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Drowzee',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Hypno',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Krabby',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Kingler',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Voltorb',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Electrode',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Exeggcute',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Exeggutor',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Cubone',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Marowack',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Hitmonlee',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Hitmonchan',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Lickitung',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Koffing',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Weezing',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Ryhorn',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Rhydon',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Chansey',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },  

  {
    name: 'Tangela',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Kangaskhan',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Horsea',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Seadra',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },  

  {
    name: 'Goldeen',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Seaking',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Staryu',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Starmie',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Mr-mime',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Scyther',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Jynx',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Electabuz',
    type: 'electrice',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Magmar',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Pinsir',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Taurus',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  
  {
    name: 'Magikarp',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Gyarados',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    hp: 95,
    speed: 81,
    attack: 125,
    defense: 79
  },

  {
    name: 'Lapras',
    type: 'ice',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Ditto',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Evee',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Vaporeon',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Jolteon',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Flareon',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Porygon',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Omanyte',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Omastar',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Kabuto',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Kabutops',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Aerodactyl',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Snorlax',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Articuno',
    type: 'ice',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Zapados',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    hp: 90,
    speed: 100,
    attack: 90,
    defense: 85
  },

  {
    name: 'Moltres',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png", 
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Dratini',
    type: 'dragon',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Dragonair',
    type: 'dragon',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },

  {
    name: 'Dragonite',
    type: 'dragon',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  {
    name: 'Mewtwo',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    hp: 106,
    speed: 130,
    attack: 110,
    defense: 90
  },

  {
    name: 'Mew',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  }
];

export default pokemon;