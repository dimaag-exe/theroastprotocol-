const questions = {

  Mathematics: [
    {
      question: "25 × 4 = ?",
      options: ["90", "100", "120", "110"],
      answer: "100"
    },
    {
      question: "√144 = ?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "If x² = 49, then x can be?",
      options: ["7", "-7", "Both 7 and -7", "None"],
      answer: "Both 7 and -7"
    },
    {
      question: "Derivative of x² is?",
      options: ["x", "2x", "x²", "1"],
      answer: "2x"
    },
    {
      question: "sin 90° = ?",
      options: ["0", "1", "-1", "1/2"],
      answer: "1"
    },
    {
      question: "∫2x dx = ?",
      options: ["x² + C", "2x² + C", "x + C", "2 + C"],
      answer: "x² + C"
    },
    {
      question: "Determinant of [[1,2],[3,4]]?",
      options: ["-2", "2", "10", "5"],
      answer: "-2"
    },
    {
      question: "log₂(8) = ?",
      options: ["2", "3", "4", "8"],
      answer: "3"
    },
    {
      question: "Diagonals in a hexagon?",
      options: ["7", "8", "9", "10"],
      answer: "9"
    },
    {
      question: "Derivative of sin(x)?",
      options: ["cos(x)", "sin(x)", "-sin(x)", "-cos(x)"],
      answer: "cos(x)"
    },
    {
      question: "∫₀¹x³dx = ?",
      options: ["1/4", "1/2", "1/3", "1"],
      answer: "1/4"
    },
    {
      question: "If f(x)=e^(x²), then f'(x)=?",
      options: ["xe^(x²)", "2xe^(x²)", "2e^(x²)", "x²e^(x²)"],
      answer: "2xe^(x²)"
    },
    {
      question: "lim(x→0) sinx/x = ?",
      options: ["0", "1", "∞", "Undefined"],
      answer: "1"
    },
    {
      question: "Eigenvalues of [[2,1],[1,2]]?",
      options: ["3 and 1", "2 and 2", "1 and 1", "4 and 0"],
      answer: "3 and 1"
    },
    {
      question: "Which is irrational?",
      options: ["π²", "16", "25", "64"],
      answer: "π²"
    }
  ],

  Physics: [
    {
      question: "SI unit of Force?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: "Newton"
    },
    {
      question: "Speed of light is?",
      options: ["3×10⁸ m/s", "340 m/s", "3000 m/s", "3×10⁶ m/s"],
      answer: "3×10⁸ m/s"
    },
    {
      question: "Unit of Power?",
      options: ["Joule", "Newton", "Watt", "Volt"],
      answer: "Watt"
    },
    {
      question: "Acceleration due to gravity is approximately?",
      options: ["9.8 m/s²", "8.9 m/s²", "10.8 m/s²", "7.8 m/s²"],
      answer: "9.8 m/s²"
    },
    {
      question: "Ohm's Law is?",
      options: ["V = IR", "P = IV", "F = ma", "Q = It"],
      answer: "V = IR"
    },
    {
      question: "SI unit of Electric Current?",
      options: ["Volt", "Ampere", "Ohm", "Coulomb"],
      answer: "Ampere"
    },
    {
      question: "Which particle has no charge?",
      options: ["Electron", "Proton", "Neutron", "Positron"],
      answer: "Neutron"
    },
    {
      question: "Formula of kinetic energy?",
      options: ["½mv²", "mgh", "Fd", "mv"],
      answer: "½mv²"
    },
    {
      question: "Unit of Frequency?",
      options: ["Tesla", "Henry", "Hertz", "Weber"],
      answer: "Hertz"
    },
    {
      question: "Instrument used to measure current?",
      options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"],
      answer: "Ammeter"
    },
    {
      question: "Escape velocity of Earth is about?",
      options: ["11.2 km/s", "7.9 km/s", "15 km/s", "9 km/s"],
      answer: "11.2 km/s"
    },
    {
      question: "Which law explains inertia?",
      options: ["Newton's First Law", "Second Law", "Third Law", "Kepler's Law"],
      answer: "Newton's First Law"
    },
    {
      question: "Which wave does not need a medium?",
      options: ["Sound", "Water", "Electromagnetic", "Seismic"],
      answer: "Electromagnetic"
    },
    {
      question: "SI unit of Pressure?",
      options: ["Pascal", "Newton", "Joule", "Bar"],
      answer: "Pascal"
    },
    {
      question: "Who proposed the theory of relativity?",
      options: ["Newton", "Einstein", "Tesla", "Galileo"],
      answer: "Einstein"
    }
  ],
    
  Chemistry: [
    {
      question: "Chemical symbol of Gold?",
      options: ["Ag", "Au", "Fe", "Pb"],
      answer: "Au"
    },
    {
      question: "pH of pure water?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Atomic number of Carbon?",
      options: ["6", "8", "12", "14"],
      answer: "6"
    },
    {
      question: "Which gas is known as Laughing Gas?",
      options: ["CO₂", "N₂O", "O₂", "NH₃"],
      answer: "N₂O"
    },
    {
      question: "NaCl is commonly known as?",
      options: ["Sugar", "Salt", "Baking Soda", "Lime"],
      answer: "Salt"
    },
    {
      question: "Avogadro's number is?",
      options: ["6.022×10²³", "3×10⁸", "9.8", "1.6×10⁻¹⁹"],
      answer: "6.022×10²³"
    },
    {
      question: "H₂SO₄ is?",
      options: ["Hydrochloric Acid", "Nitric Acid", "Sulphuric Acid", "Acetic Acid"],
      answer: "Sulphuric Acid"
    },
    {
      question: "Which element is liquid at room temperature?",
      options: ["Iron", "Mercury", "Sodium", "Aluminium"],
      answer: "Mercury"
    },
    {
      question: "Formula of Methane?",
      options: ["CH₄", "C₂H₆", "CO₂", "NH₃"],
      answer: "CH₄"
    },
    {
      question: "The hardest natural substance is?",
      options: ["Iron", "Diamond", "Quartz", "Graphite"],
      answer: "Diamond"
    },
    {
      question: "Which bond involves sharing of electrons?",
      options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
      answer: "Covalent"
    },
    {
      question: "Atomic number of Oxygen?",
      options: ["6", "7", "8", "9"],
      answer: "8"
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
      answer: "Nitrogen"
    },
    {
      question: "SI unit of amount of substance?",
      options: ["Gram", "Mole", "Kilogram", "Atom"],
      answer: "Mole"
    },
    {
      question: "Who developed the Periodic Table?",
      options: ["Dalton", "Mendeleev", "Bohr", "Rutherford"],
      answer: "Mendeleev"
    }
  ],

  Gaming: [
    {
      question: "Which company developed Minecraft?",
      options: ["Valve", "Mojang", "Epic Games", "Rockstar"],
      answer: "Mojang"
    },
    {
      question: "What is the highest rarity in Clash Royale?",
      options: ["Epic", "Legendary", "Champion", "Rare"],
      answer: "Champion"
    },
    {
      question: "Which game features Steve as the main character?",
      options: ["Terraria", "Minecraft", "Roblox", "Fortnite"],
      answer: "Minecraft"
    },
    {
      question: "PUBG stands for?",
      options: [
        "PlayerUnknown's Battlegrounds",
        "Pro Ultimate Battle Game",
        "Public Battle Ground",
        "Player Ultimate Battleground"
      ],
      answer: "PlayerUnknown's Battlegrounds"
    },
    {
      question: "Which company owns PlayStation?",
      options: ["Microsoft", "Nintendo", "Sony", "EA"],
      answer: "Sony"
    },
    {
      question: "What is the currency in Clash Royale called?",
      options: ["Coins", "Gold", "Credits", "Cash"],
      answer: "Gold"
    },
    {
      question: "Which game has Creepers?",
      options: ["Fortnite", "Minecraft", "Roblox", "GTA V"],
      answer: "Minecraft"
    },
    {
      question: "Who is Mario's brother?",
      options: ["Wario", "Luigi", "Yoshi", "Toad"],
      answer: "Luigi"
    },
    {
      question: "Which company created GTA V?",
      options: ["Ubisoft", "Rockstar Games", "Valve", "Epic Games"],
      answer: "Rockstar Games"
    },
    {
      question: "Which battle royale game was developed by Epic Games?",
      options: ["PUBG", "Fortnite", "Apex Legends", "Free Fire"],
      answer: "Fortnite"
    },
    {
      question: "What is the maximum Town Hall level in Clash of Clans (2026)?",
      options: ["15", "16", "17", "18"],
      answer: "18"
    },
    {
      question: "Which game features the Ender Dragon?",
      options: ["Terraria", "Minecraft", "ARK", "Rust"],
      answer: "Minecraft"
    },
    {
      question: "Which company owns Xbox?",
      options: ["Sony", "Nintendo", "Microsoft", "Valve"],
      answer: "Microsoft"
    },
    {
      question: "What color are Minecraft Creepers?",
      options: ["Blue", "Green", "Yellow", "Red"],
      answer: "Green"
    },
    {
      question: "Which is NOT a real Pokémon?",
      options: ["Pikachu", "Charizard", "Bulbasaur", "Dragonix"],
      answer: "Dragonix"
    }
  ],
    
     Football: [
    {
      question: "How many players are on the field for one team?",
      options: ["10", "11", "12", "9"],
      answer: "11"
    },
    {
      question: "Which country won the FIFA World Cup 2022?",
      options: ["France", "Argentina", "Brazil", "Germany"],
      answer: "Argentina"
    },
    {
      question: "How long is a normal football match?",
      options: ["80 mins", "90 mins", "100 mins", "120 mins"],
      answer: "90 mins"
    },
    {
      question: "Which player is known as 'The King of Football'?",
      options: ["Messi", "Pelé", "Ronaldo", "Maradona"],
      answer: "Pelé"
    },
    {
      question: "Which club did Neymar join after leaving PSG in 2023?",
      options: ["Barcelona", "Al Hilal", "Chelsea", "Arsenal"],
      answer: "Al Hilal"
    },
    {
      question: "Which country is Cristiano Ronaldo from?",
      options: ["Spain", "Portugal", "Brazil", "Italy"],
      answer: "Portugal"
    },
    {
      question: "Which country hosted the FIFA World Cup 2022?",
      options: ["Russia", "Qatar", "USA", "Germany"],
      answer: "Qatar"
    },
    {
      question: "Which position can use hands inside the penalty area?",
      options: ["Defender", "Goalkeeper", "Striker", "Midfielder"],
      answer: "Goalkeeper"
    },
    {
      question: "How many minutes are added for halftime?",
      options: ["10", "15", "20", "5"],
      answer: "15"
    },
    {
      question: "Which card sends a player off?",
      options: ["Yellow", "Red", "Blue", "Green"],
      answer: "Red"
    },
    {
      question: "Which club is known as 'Los Blancos'?",
      options: ["Barcelona", "Real Madrid", "Liverpool", "Juventus"],
      answer: "Real Madrid"
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Italy", "Argentina", "Brazil"],
      answer: "Brazil"
    },
    {
      question: "Who is Barcelona's biggest rival?",
      options: ["Atletico Madrid", "Real Madrid", "Sevilla", "Valencia"],
      answer: "Real Madrid"
    },
    {
      question: "How many points are awarded for a win?",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      question: "Which famous number did Neymar wear for Santos?",
      options: ["7", "10", "9", "11"],
      answer: "11"
    }
  ],

  Movies: [
    {
      question: "Which movie features Iron Man?",
      options: ["Avengers", "Avatar", "Titanic", "Joker"],
      answer: "Avengers"
    },
    {
      question: "Who directed Titanic?",
      options: ["Christopher Nolan", "James Cameron", "Steven Spielberg", "Ridley Scott"],
      answer: "James Cameron"
    },
    {
      question: "Which movie has the quote 'I'll be back'?",
      options: ["Rocky", "The Terminator", "Avatar", "Gladiator"],
      answer: "The Terminator"
    },
    {
      question: "Which superhero is Bruce Wayne?",
      options: ["Spider-Man", "Batman", "Superman", "Iron Man"],
      answer: "Batman"
    },
    {
      question: "Which movie won Best Picture at the Oscars for 2024?",
      options: ["Oppenheimer", "Barbie", "Poor Things", "Killers of the Flower Moon"],
      answer: "Oppenheimer"
    },
    {
      question: "Who played Jack in Titanic?",
      options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matt Damon"],
      answer: "Leonardo DiCaprio"
    },
    {
      question: "Which movie is about Pandora?",
      options: ["Avatar", "Interstellar", "Dune", "Gravity"],
      answer: "Avatar"
    },
    {
      question: "Who directed Interstellar?",
      options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Denis Villeneuve"],
      answer: "Christopher Nolan"
    },
    {
      question: "Which movie features the Joker played by Joaquin Phoenix?",
      options: ["Batman Begins", "Joker", "The Batman", "Suicide Squad"],
      answer: "Joker"
    },
    {
      question: "Which movie series has Hogwarts?",
      options: ["Lord of the Rings", "Harry Potter", "Narnia", "Percy Jackson"],
      answer: "Harry Potter"
    },
    {
      question: "Who is known as the 'King of Bollywood'?",
      options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Hrithik Roshan"],
      answer: "Shah Rukh Khan"
    },
    {
      question: "Which movie is about dreams within dreams?",
      options: ["Inception", "Tenet", "Memento", "Prestige"],
      answer: "Inception"
    },
    {
      question: "Which film features Thanos?",
      options: ["Justice League", "Avengers", "Deadpool", "Fantastic Four"],
      answer: "Avengers"
    },
    {
      question: "Who directed Avatar?",
      options: ["James Cameron", "Christopher Nolan", "Peter Jackson", "Ridley Scott"],
      answer: "James Cameron"
    },
    {
      question: "Which movie has the character 'Forrest Gump'?",
      options: ["Cast Away", "Forrest Gump", "The Green Mile", "Saving Private Ryan"],
      answer: "Forrest Gump"
    }
  ],

  Music: [
    {
      question: "How many notes are there in a basic musical scale?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Which instrument has 88 keys?",
      options: ["Guitar", "Piano", "Violin", "Drums"],
      answer: "Piano"
    },
    {
      question: "Which singer is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Bruno Mars", "Ed Sheeran"],
      answer: "Michael Jackson"
    },
    {
      question: "Which instrument has six strings?",
      options: ["Flute", "Guitar", "Piano", "Tabla"],
      answer: "Guitar"
    },
    {
      question: "Which symbol raises a note by one semitone?",
      options: ["Flat", "Sharp", "Natural", "Rest"],
      answer: "Sharp"
    },
    {
      question: "Who sang 'Shape of You'?",
      options: ["Justin Bieber", "Ed Sheeran", "Drake", "Shawn Mendes"],
      answer: "Ed Sheeran"
    },
    {
      question: "Which Indian instrument has two drums?",
      options: ["Veena", "Tabla", "Sitar", "Flute"],
      answer: "Tabla"
    },
    {
      question: "Which clef is most common?",
      options: ["Bass", "Treble", "Alto", "Tenor"],
      answer: "Treble"
    },
    {
      question: "How many strings does a standard violin have?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which artist released the album 'Thriller'?",
      options: ["Prince", "Michael Jackson", "The Weeknd", "Bruno Mars"],
      answer: "Michael Jackson"
    },
    {
      question: "What does BPM stand for?",
      options: ["Beats Per Minute", "Bass Per Music", "Beat Power Meter", "Basic Pitch Mode"],
      answer: "Beats Per Minute"
    },
    {
      question: "Which instrument is played with drumsticks?",
      options: ["Guitar", "Drums", "Piano", "Violin"],
      answer: "Drums"
    },
    {
      question: "Which singer is famous for 'Blinding Lights'?",
      options: ["The Weeknd", "Drake", "Post Malone", "Justin Bieber"],
      answer: "The Weeknd"
    },
    {
      question: "How many strings does a standard guitar have?",
      options: ["4", "5", "6", "7"],
      answer: "6"
    },
    {
      question: "Which Indian composer won two Oscars for 'Slumdog Millionaire'?",
      options: ["Pritam", "A. R. Rahman", "Anu Malik", "Shankar Mahadevan"],
      answer: "A. R. Rahman"
    }
  ]

}; 