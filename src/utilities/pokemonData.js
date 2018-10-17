const pokemon = [
  {
    name: 'Bulbasaur',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },

  {
    name: "Ivysaur",
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    name: 'Venusaur', 
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },

  {
    name: 'Charmander',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },

  {
    name: 'Charmeleon',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },

  {
    name: 'Charizard',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
    hp: 78,
    speed: 100,
    attack: 84,
    defense: 78
  },

  {
    name: 'Squirtle',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },

  {
    name: "Wartortle",
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },

  {
    name: 'Blastoise',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
    hp: 79,
    speed: 78,
    attack: 83,
    defense: 100
  },

  {
    name: 'Caterpie',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },

  {
    name: 'Metapod',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },

  {
    name: "Butterfree",
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },

  {
    name: "Weedle",
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },

  {
    name: 'Kakuna',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },

  {
    name: 'Beedrill',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },

  {
    name: 'Pidgey',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },

  {
    name: 'Pidgeotto',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },

  {
    name: 'Pidgeot',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
    hp: 83,
    speed: 101,
    attack: 80,
    defense: 75
  },

  {
    name: 'Rattata',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },

  {
    name: 'Raticate',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },

  {
    name: 'Spearow',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },

  {
    name: 'Fearow',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },

  {
    name: 'Ekans',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },

  {
    name: 'Arbok',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  
  {
    name: 'Pikachu',
    type: 'Electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
    hp: 35,
    speed: 90,
    attack: 55,
    defense: 40
  },

  {
    name: 'Raichu',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },

  {
    name: 'Sandshrew',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },

  {
    name: 'Sandslash',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },

  {
    name: 'Nidoran',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  
  {
    name: 'Nidorina',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },

  {
    name: 'Nidorino',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },

  {
    name: "Nidoqueen",
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },

  {
    name: 'Nidoking',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },

  {
    name: 'Clefairy',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },

  {
    name: 'Clefable',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },

  {
    name: 'Vulpix',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },

  {
    name: 'Ninetails',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },

  {
    name: 'Jigglypuff',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },

  {
    name: 'Wigglytuff',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },

  {
    name: 'Zubat',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },

  {
    name: 'Golbat',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },

  {
    name: 'Oddish',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },

  {
    name: 'Gloom',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },

  {
    name: 'Vileplume',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },

  {
    name: 'Paras',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },

  {
    name: 'Parasect',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },

  {
    name: 'Venonat',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },

  {
    name: 'Venomoth',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },

  {
    name: 'Diglett',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },

  {
    name: 'Dugtrio',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },

  {
    name: 'Meowth',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },

  {
    name: 'Persian',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },

  {
    name: 'Psyduck',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },

  {
    name: 'Golduck',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },

  {
    name: 'Mankey',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },

  {
    name: 'Primeape',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },

  {
    name: 'Growlithe',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },

  {
    name: 'Arcanine',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },

  {
    name: 'Poliwag',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },

  {
    name: 'Poliwhirl',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },

  {
    name: 'Poliwrath',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },

  {
    name: 'Abra',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },

  {
    name: 'Kadabra',
    type: 'Psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/64.png",
    hp: 40,
    speed: 105,
    attack: 35,
    defense: 30
  },

  {
    name: 'Alakazam',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },

  {
    name: 'Machop',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },

  {
    name: 'Machoke',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },

  {
    name: 'Machamp',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },

  {
    name: 'Bellsprout',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },

  {
    name: 'Weepinbell',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },

  {
    name: 'Victreebel',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },

  {
    name: 'Tentacool',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },

  {
    name: 'Tentacruel',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },

  {
    name: 'Geodude',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },

  {
    name: 'Gravler',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },

  {
    name: 'Golem',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },

  {
    name: 'Ponyta',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },

  {
    name: 'Rapidash',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },

  {
    name: 'Slowpoke',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },

  {
    name: 'Slowbro',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },

  {
    name: 'Magnemite',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },

  {
    name: 'Magneton',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },

  {
    name: 'Farfetchd',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },

  {
    name: 'Doduo',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },

  {
    name: 'Dodrio',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },

  {
    name: 'Seel',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },

  {
    name: 'Dewgong',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },

  {
    name: 'Grimer',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },

  {
    name: 'Muk',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },

  {
    name: 'Shellder',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },

  {
    name: 'Cloyster',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },

  {
    name: 'Gastly',
    type: 'ghost',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },

  {
    name: 'Haunter',
    type: 'ghost',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  
  {
    name: 'Gengar',
    type: 'ghost',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png",
    hp: 60,
    speed: 110,
    attack: 65,
    defense: 60
  },

  {
    name: 'Onix',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },

  {
    name: 'Drowzee',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },

  {
    name: 'Hypno',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },

  {
    name: 'Krabby',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },

  {
    name: 'Kingler',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },

  {
    name: 'Voltorb',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  },

  {
    name: 'Electrode',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
  },

  {
    name: 'Exeggcute',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
  },

  {
    name: 'Exeggutor',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
  },

  {
    name: 'Cubone',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
  },

  {
    name: 'Marowack',
    type: 'ground',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  },

  {
    name: 'Hitmonlee',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
  },

  {
    name: 'Hitmonchan',
    type: 'fighting',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
  },

  {
    name: 'Lickitung',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
  },

  {
    name: 'Koffing',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
  },

  {
    name: 'Weezing',
    type: 'poison',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
  },

  {
    name: 'Ryhorn',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
  },

  {
    name: 'Rhydon',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
  },

  {
    name: 'Chansey',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
  },  

  {
    name: 'Tangela',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
  },

  {
    name: 'Kangaskhan',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
  },

  {
    name: 'Horsea',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
  },

  {
    name: 'Seadra',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
  },  

  {
    name: 'Goldeen',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
  },

  {
    name: 'Seaking',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
  },

  {
    name: 'Staryu',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },

  {
    name: 'Starmie',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
  },

  {
    name: 'Mr-mime',
    type: 'fairy',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
  },

  {
    name: 'Scyther',
    type: 'grass',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
  },

  {
    name: 'Jynx',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
  },

  {
    name: 'Electabuz',
    type: 'electrice',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
  },

  {
    name: 'Magmar',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
  },

  {
    name: 'Pinsir',
    type: 'bug',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
  },

  {
    name: 'Taurus',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  
  {
    name: 'Magikarp',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },

  {
    name: 'Gyarados',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
    hp: 95,
    speed: 81,
    attack: 125,
    defense: 79
  },

  {
    name: 'Lapras',
    type: 'ice',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },

  {
    name: 'Ditto',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },

  {
    name: 'Evee',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },

  {
    name: 'Vaporeon',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },

  {
    name: 'Jolteon',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },

  {
    name: 'Flareon',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },

  {
    name: 'Porygon',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
  },

  {
    name: 'Omanyte',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },

  {
    name: 'Omastar',
    type: 'water',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
  },

  {
    name: 'Kabuto',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },

  {
    name: 'Kabutops',
    type: 'rock',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
  },

  {
    name: 'Aerodactyl',
    type: 'flying',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
  },

  {
    name: 'Snorlax',
    type: 'normal',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },

  {
    name: 'Articuno',
    type: 'ice',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
  },

  {
    name: 'Zapados',
    type: 'electric',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
    hp: 90,
    speed: 100,
    attack: 90,
    defense: 85
  },

  {
    name: 'Moltres',
    type: 'fire',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" 
  },

  {
    name: 'Dratini',
    type: 'dragon',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
  },

  {
    name: 'Dragonair',
    type: 'dragon',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
  },

  {
    name: 'Dragonite',
    type: 'dragon',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png",
    hp: 91,
    speed: 80,
    attack: 134,
    defense: 95
  },
  {
    name: 'Mewtwo',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png",
    hp: 106,
    speed: 130,
    attack: 110,
    defense: 90
  },

  {
    name: 'Mew',
    type: 'psychic',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
]

export default pokemon