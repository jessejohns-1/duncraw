const storyElements = [
  {
  id: 1,
  text: "You stand at the entrance of the lively city of Duncraw, with merchants and townsfolk creating a cacophony of sounds. Your long journey has led you to this city of opportunities and adventures. Strolling through the bustling streets, you enjoy the laughter of playing children, the scent of fresh bread, and colorful market tapestries. You notice the city is a melting pot of cultures and races, each contributing to the vibrant urban landscape.\n\nYou come across a town crier announcing a grand event at the city square. Intrigued, you navigate the busy crowd to learn more. Upon arrival, you see a stage with a distinguished man behind a podium, likely the mayor. With great enthusiasm, he tells the crowd about a treasure hunt in Duncraw and encourages everyone to join.",
  background: "",
  choices: [
  { id: 1, text: "Join the treasure hunt", nextElement: 2 },
  ],
  },
  {
  id: 2,
  text: "Eager for adventure and riches, you decide to participate in the treasure hunt. The mayor hands you a mysterious map and a list of riddles. As you follow the map and solve the riddles, you face various challenges and obstacles that test your wit and courage.",
  background: "",
  choices: [
  { id: 1, text: "Continue to follow the map", nextElement: 4 },
  ],
  },
  {
  id: 4,
  text: "Resolute in your quest, you traverse the winding streets and back alleys of Duncraw. As night falls, eerie shadows dance on the ancient walls and the air turns chilly. Guided by your instincts and resourcefulness, you discover a hidden courtyard with the first riddle. Inscribed on a stone plaque, it reads: 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?' With a blend of excitement and apprehension, you ponder the riddle and contemplate the potential answers.",
  background: "",
  choices: [
  { id: 1, text: "Answer: 'An echo'", nextElement: 6 },
  { id: 2, text: "Answer: 'A ghost'", nextElement: 7 },
  ],
  },
  {
  id: 6,
  text: "Confidently, you announce your answer: 'An echo.' The stone plaque shimmers, revealing a hidden passage. Energized, you proceed to face the next challenge in your treasure hunt. The passage takes you deeper into the city's underbelly, where more riddles and obstacles lie. Your confidence grows with each success, drawing you closer to the treasure.",
  background: "",
  choices: [
  { id: 1, text: "You walk ahead with fear and excitement!", nextElement: 9 },
  ],
  },
  {
  id: 9,
  text: "With a blend of fear and excitement, you delve deeper into the unknown. You stumble upon another hidden courtyard, this one containing a more complex riddle etched on a large stone tablet. It reads: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?' You carefully ponder the riddle and consider the possible answers.",
  background: "",
  choices: [
  { id: 1, text: "Answer: 'A pencil'", nextElement: 10 },
  ],
  },
  {
  id: 10,
  text: "Holding your breath, you declare your answer: 'A pencil.' For a moment, nothing happens, and you start to doubt your choice. Suddenly, the stone tablet glows with a mystical light, unveiling a treasure-filled chamber. Ancient artifacts and gold coins shimmer in the dim illumination. Overwhelmed with excitement and disbelief, you realize you've found the elusive treasure.",
  background: "",
  choices: [
  { id: 1, text: "Take a moment to soak it all in", nextElement: 11 },
  ],
  },
  {
  id: 11,
  text: "Basking in the joy of your victory, you take a moment to admire the intricate details and craftsmanship of the treasures. You wonder how long they've been hidden away from prying eyes. As you revel in your success, you understand that the adventure isn't over yet. You still need to navigate out of the chamber and return to the city to claim your prize and receive the townspeople's adoration.",
  background: "",
  choices: [
  { id: 1, text: "Find your way out of the chamber and return to the city", nextElement: 12 },
  ],
  },
  {
  id: 12,
  text: "With the treasure in hand, you make your way back to the city. Pride and accomplishment swell within you, knowing that you've achieved what others could not. As you walk the streets, you notice the townspeople's awed and envious gazes. Your success has made an impression.",
  background: "",
  choices: [
  { id: 1, text: "Find the mayor and claim your prize", nextElement: 13 },
  ],
  },
  {
    id: 13,
    text: "You locate the mayor in the town square, encircled by curious onlookers. He acknowledges you with a nod and signals you over. With a dramatic flourish, he presents you with a 'gift' to commemorate your victory. Your excitement quickly turns to confusion as you realize he's handed you a simple, mundane t-shirt. The mayor seems oblivious to your disappointment, and the crowd cheers, baffled by the odd prize. You put on a brave face, masking your dismay. Despite the underwhelming reward, you've made a name for yourself in Duncraw through your hard work and determination.",
    background: "",
    inventoryAction: {
    type: "add",
    item: {
    name: "a t-shirt",
    type: "outfit",
    },
    },
  choices: [
  { id: 1, text: "Look for your next adventure", nextElement: 14 },
  ],
  },
  {
  id: 14,
  text: "As the cheers fade and the crowd disperses, you find yourself in the bustling city of Duncraw once more. Your mind races with possibilities, wondering what adventures await. Excitement and anticipation fill you, knowing that anything is possible in this city of opportunities. You take a deep breath and step forward, ready to face whatever comes your way.",
  background: "",
  choices: [
  { id: 1, text: "to be continued", nextElement: 1},
  ],
  },
  ];
  
  export default storyElements;