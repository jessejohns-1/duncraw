const storyElements = [
  {
    id: 1,
    text: "You stand at the entrance of the lively city of Duncraw, with merchants and townsfolk creating a cacophony of sounds. Your long journey has led you to this city of opportunities and adventures. Strolling through the bustling streets, you enjoy the laughter of playing children, the scent of fresh bread, and colorful market tapestries. You notice the city is a melting pot of cultures and races, each contributing to the vibrant urban landscape.\n\nYou come across a town crier announcing a grand event at the city square. Intrigued, you navigate the busy crowd to learn more. Upon arrival, you see a stage with a distinguished man behind a podium, likely the mayor. With great enthusiasm, he tells the crowd about a treasure hunt in Duncraw and encourages everyone to join.",
    background: "",
    choices: [
      { id: 1, text: "Join the treasure hunt", nextElement: 2 },
      { id: 2, text: "Visit the market and prepare for the journey", nextElement: 3 },
    ],
  },
  {
    id: 2,
    text: "Eager for adventure and riches, you decide to participate in the treasure hunt. The mayor hands you a mysterious map and a list of riddles. As you follow the map and solve the riddles, you face various challenges and obstacles that test your wit and courage.",
    background: "",
    choices: [
      { id: 1, text: "Continue to follow the map", nextElement: 4 },
      { id: 2, text: "Seek assistance from the locals", nextElement: 16 },
    ],
  },
  {
    id: 3,
    text: "You make your way through the bustling marketplace, looking for supplies to prepare for the treasure hunt. You purchase a sturdy backpack, a compass, and a few other essentials. As you leave the market, you overhear whispers about a secret society that has knowledge of the hidden treasure.",
    background: "",
    choices: [
      { id: 1, text: "Seek out the secret society", nextElement: 17 },
      { id: 2, text: "Ignore the whispers and follow the map", nextElement: 2 },
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
  id: 7,
  text: "Hesitantly, you offer your answer: 'A ghost.' The stone plaque remains unchanged, and you feel your heart sink with disappointment. The treasure hunt appears to be over for you. Dejected, you return to the city streets, wondering how the townspeople will react to your failure.",
  background: "",
  choices: [
  { id: 1, text: "Face the townspeople with your head held high", nextElement: 15 },
  ],
  },
  {
    id: 15,
    text: "Despite your failure, you decide to face the townspeople with your head held high. As you return to the city square, you can sense their disappointment. To your surprise, they decide to playfully tease you about your misadventure. They dress you up in a makeshift donkey costume and have you parade around the town square, plowing a small patch of dirt as a lighthearted reminder of your failed quest. As you embark on a few more adventures, you realize that your heart is no longer in it. You decide to retire from adventuring and pursue a new passion - becoming a traveling cheese salesman. With a newfound sense of purpose, you set off to explore the world of cheese, visiting exotic lands and sampling the finest cheeses the world has to offer. The end.",
    background: "",
    choices: [
    { id: 1, text: "end your journey and become a traveling cheese salesman", nextElement: 1 },
    ],
  },
  {
    id: 9,
    text: "With a blend of fear and excitement, you delve deeper into the unknown. You stumble upon another hidden courtyard, this one containing a more complex riddle etched on a large stone tablet. It reads: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?' You carefully ponder the riddle and consider the possible answers.",
    background: "",
    choices: [
      { id: 1, text: "Answer: 'A gem'", nextElement: 15 },
      { id: 2, text: "Answer: 'A pencil'", nextElement: 10 },
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
  item: {  name: "a t-shirt",
  type: "outfit",
},
},
choices: [
{ id: 1, text: "Look for your next adventure", nextElement: 14 },
],},
{
id: 14,
text: "As the cheers fade and the crowd disperses, you find yourself in the bustling city of Duncraw once more. Your mind races with possibilities, wondering what adventures await. Excitement and anticipation fill you, knowing that anything is possible in this city of opportunities. You take a deep breath and step forward, ready to face whatever comes your way.",
background: "",
choices: [
{ id: 1, text: "Next", nextElement: 30 },
],
},{
  id: 15,
  text: "With uncertainty, you answer: 'A gem.' The stone tablet remains unchanged, and you realize your mistake. Disheartened, you return to the city, where the townspeople greet you with a mix of sympathy and disappointment. You failed to find the treasure, but the experience has taught you valuable lessons. Now, you seek redemption and another chance to prove yourself.",
  background: "",
  choices: [
    { id: 1, text: "Look for another adventure", nextElement: 14 },
  ],
},
{
  id: 16,
  text: "You decide to seek help from the locals in solving the riddles. You come across an elderly woman, who seems to be well-versed in the city's lore. With her guidance, you manage to decipher the riddles and make your way through the city's hidden paths. As you work together, you learn about the history of Duncraw and the legends surrounding the treasure you seek.",
  background: "",
  choices: [
  { id: 1, text: "Follow the elderly woman's guidance", nextElement: 4 },
  { id: 2, text: "Venture forth on your own", nextElement: 18 },
  ],
  },{
    id: 17,
    text: "Curiosity piqued, you decide to seek out the secret society. After asking discreet questions and following mysterious leads, you find yourself in a dimly lit chamber, surrounded by hooded figures. They reveal that they have been guarding the treasure for generations and are willing to share their knowledge with you if you prove yourself worthy.",
    background: "",
    choices: [
    { id: 1, text: "Accept their challenge", nextElement: 19 },
    { id: 2, text: "Politely decline and follow the map", nextElement: 2 },
    ],
    },
    {
    id: 18,
    text: "You choose to venture forth on your own, armed with the knowledge shared by the elderly woman. As you delve deeper into the city's labyrinth, you encounter hidden passages and secret chambers, each filled with their own mysteries and dangers. Along the way, you find clues that hint at the treasure's true nature and the ancient civilization that once thrived in Duncraw.",
    background: "",
    choices: [
    { id: 1, text: "Continue exploring the city's secrets", nextElement: 20 },
    { id: 2, text: "Return to the main path and follow the map", nextElement: 4 },
    ],
    },
    {
    id: 19,
    text: "Accepting the secret society's challenge, you embark on a series of trials designed to test your wit, courage, and resourcefulness. As you overcome each trial, you gain the respect and admiration of the society members. They eventually share their knowledge of the treasure and the city's hidden secrets, opening new doors of adventure.",
    background: "",
    choices: [
    { id: 1, text: "Embark on a new adventure with the secret society", nextElement: 21 },
    { id: 2, text: "Continue the treasure hunt using the society's knowledge", nextElement: 4 },
    ],
    },
    {
    id: 20,
    text: "As you continue exploring the city's secrets, you uncover the remnants of an ancient civilization and its lost technology. The more you learn, the more you realize that the treasure is only a small part of a larger, more complex story. The deeper you delve, the more you become entwined in the city's hidden history, shaping your destiny and that of Duncraw itself.",
    background: "",
    choices: [
    { id: 1, text: "Embrace your newfound destiny", nextElement: 22 },
    { id: 2, text: "Return to the treasure hunt", nextElement: 4 },
    ],
    },
   
{
  id: 21,
  text: "Embarking on a new adventure with the secret society, you become part of a larger quest to protect Duncraw and its hidden secrets. As a valued member of the society, you face countless challenges and forge lasting friendships. Your experiences in Duncraw have forever changed you, turning you into a seasoned adventurer and a guardian of the city's ancient mysteries.",
  background: "",
  choices: [
  { id: 1, text: "Continue", nextElement: 25 },
  ],
  },
  {
    id: 25,
    text: "In your pursuit of preserving the ancient civilization's secrets, you stumble upon a long-forgotten temple. The temple's entrance is guarded by a massive stone statue that only speaks in riddles. To gain entry, you must make the statue laugh with a clever response to its riddle. The statue poses the following riddle: 'What has keys but can't open locks?'",
    background: "",
    choices: [
      { id: 1, text: "Answer: 'A piano'", isCorrect: true, nextElement: 26 },
      { id: 2, text: "Answer: 'A banana'", isCorrect: false, nextElement: 27 },
    ],
  },
  {
  id: 26,
  text: "You confidently answer, 'A piano!' To your surprise, the stone statue begins to chuckle. Its laughter grows louder and more boisterous, shaking the ground beneath your feet. The temple's entrance creaks open, revealing an enormous room filled with ancient relics and... whoopee cushions? As you step inside, it becomes clear that this temple was once a sanctuary dedicated to humor and laughter. The walls are lined with jokes, riddles, and illustrations of people engaged in slapstick antics.",
  background: "",
  choices: [
  { id: 1, text: "Explore the temple further", nextElement: 27 },
  ],
  },
  {
  id: 27,
  text: "As you explore the temple, you can't help but laugh at the absurdity of it all. You and your companions find yourselves embroiled in a series of hilarious mishaps and comedic accidents. From narrowly avoiding a rogue pie in the face to accidentally stepping on a rake, the entire experience becomes a lighthearted romp through an ancient comedic playground.",
  background: "",
  choices: [
  { id: 1, text: "Exit the temple with your new memories", nextElement: 28 },
  ],
  },
  {
  id: 28,
  text: "With your spirits lifted and your sides aching from laughter, you leave the temple behind. The secret society welcomes your hilarious tales, as the joy of laughter spreads throughout Duncraw. Your adventures become the stuff of legends, with tales of your comedic exploits told and retold for generations to come. In the end, you're not just a guardian of the city's ancient mysteries, but also the bringer of laughter and joy.",
  background: "",
  choices: [
  { id: 1, text: "continue to the treasure", nextElement: 4 },
  ],
  },
  {
    id: 22,
    text: "Embracing your newfound destiny, you become a key figure in uncovering and preserving the ancient civilization's secrets. As you delve deeper into Duncraw's hidden history, you face countless challenges and form unlikely alliances. The once simple treasure hunt has evolved into a grand adventure, one that shapes not only your fate but the future of the city itself.",
    background: "",
    choices: [
    { id: 1, text: "Continue exploring the ancient civilization", nextElement: 23 },
    ],
    },
    {
    id: 23,
    text: "As you continue to explore the secrets of the ancient civilization, you encounter unexpected perils. One fateful day, you and your companions venture into a long-lost tomb. The tomb is filled with intricate traps and puzzles, designed to deter any intruders from uncovering its secrets. As your party navigates through the tomb, you accidentally trigger one of the traps, causing the chamber to flood with water.",
    background: "",
    choices: [
    { id: 1, text: "Attempt to escape the chamber", nextElement: 24 },
    ],
    },
    {
    id: 24,
    text: "With water rushing in, panic sets in as you and your companions desperately try to escape the chamber. Despite your best efforts, the water rises too quickly, and you realize that there's no way out. As the last bit of air disappears, you and your companions succumb to the cold embrace of the tomb. The secrets of the ancient civilization remain buried, and the city of Duncraw loses its greatest adventurer. Your story ends here, a tragic reminder of the dangers that come with unearthing the past.",
    background: "",
    choices: [
    { id: 1, text: "The end", nextElement: 1 },
    ],
    },
    {
      id: 30,
      text: "You spend the next several days combing through Duncraw, visiting its bustling marketplaces, crowded taverns, and quiet alleyways in search of new quests. Along the way, you encounter an array of colorful characters – a one-eyed bard who sings tales of legendary heroes, a grizzled blacksmith who forges weapons imbued with magical properties, and a mischievous street magician who performs dazzling tricks for enthralled onlookers. As you delve deeper into the city, you stumble upon a small, lost dog with a distinctive collar and a name tag that reads 'Peaches.' Upon asking around, you learn that Peaches belongs to a reclusive witch who resides in a hut on the outskirts of town. Determined to reunite the dog with its owner, you offer it a treat and gently coax it to follow you as you set off on a journey to the witch's hut, hoping for a reward upon your return.",
      background: "",
      choices: [
      { id: 1, text: "Embark on the journey to the witch's hut with Peaches", nextElement: 31 },
      ],
      },
      {
        id: 31,
        text: "As you and Peaches make your way through the winding streets of Duncraw, you can't help but notice the peculiar bond that seems to be forming between you. The once-lost dog now trots along happily by your side, occasionally stopping to sniff out interesting scents and explore hidden corners of the city. Together, you navigate your way out of the city, following a narrow path that leads through dense forests and across babbling brooks. Along the way, you meet fascinating creatures that inhabit the woodland, such as a family of talking squirrels who share their stash of acorns, and a wise old owl who offers cryptic advice on life and destiny.\n\nThe journey to the witch's hut is long and arduous, but you remain steadfast in your mission to return Peaches to his owner. As the two of you grow closer, you tell him stories, enjoying each other's company more than you ever thought possible. Peaches proves to be a loyal and resourceful companion, using his keen senses to guide you through the increasingly treacherous terrain. The further you venture from the city, the wilder and more untamed the landscape becomes, presenting you with new challenges at every turn.\n\nAt last, you reach the witch's hut, nestled at the edge of a dark and foreboding swamp. The gnarled wooden structure looks as though it has been there for centuries, its timbers twisted and weathered by the elements. As you approach the door, Peaches excitedly barks and bounds up the steps, wagging his tail furiously. The door creaks open, and a wizened old woman emerges from the shadows, eyeing you and Peaches with suspicion.\n\n'What are you doing with my grandson?' she asks, her voice laced with anger. 'He's a child wizard, not a dog. How dare you take him without my permission!'\n\nMystic's eyes light up at the sight of his grandmother. 'Please, Grandma,' he pleads. 'I want to go on adventures with them. I want to see the world outside our village.'\n\nThe witch looks down at her grandson, her expression softening. She turns to you, her eyes piercing. 'Can I trust you to take care of him and keep him safe on your travels?'\n\nYou nod, eager to take Peaches with you on your adventures. 'I promise to keep him safe and teach him everything I know about the outside world,' you say.\n\nThe witch studies you for a moment, as if weighing your words. Finally, she nods. 'Very well,' she says. 'You may take Peaches with you, but remember – he is still a child, and he must be protected at all times.'\n\nOverjoyed by the witch's permission, you set out into the wilderness with Peaches as your eager companion.",
        background: "",
        choices: [
          { id: 1, text: "Say your farewells and embark on your next adventure", nextElement: 32 }
        ]
      },{
        id: 32,
        text: "As you and Peaches continue your journey through the dense forest, the Boy suddenly stops in his tracks and turns to you. 'I have to tell you something,' he says, his expression serious. 'I need to find my talisman it's the only way to break a terrible curse that's befallen my village.'\n\nYou're taken aback by this revelation. 'What kind of curse?' you ask.\n\n'The village is slowly being destroyed by a dark force that we cannot fight,' the Boy explains. 'But the talisman has the power to banish it forever. I must find it before it's too late.'\n\nYou nod, understanding the gravity of the situation. 'Do you have any idea where it might be?' you ask.\n\nThe Boy nods. 'Legend has it that it's hidden within an ancient underground cavern, guarded by fierce beasts and deadly traps. It's a treacherous journey, but we have to try.'\n\nWith newfound determination, you set out to find the cavern, knowing that the fate of the Boy's village rests in your hands.",
        background: "",
        inventoryAction: {
          type: "add",
          item: {  name: "Peaches",
          type: "companion",
        },
        },
        choices: [
          { id: 1, text: "Embark on the quest to find the talisman and save the Boy's village", nextElement: 33 }
        ]
      },
      {
        id: 33,
        text: "You and Peaches set out on your epic quest to find the mystical talisman, determined to save the Boy's village from its cursed fate. But the journey is anything but easy. You've asked everyone you've come across if they've heard of the underground labyrinth, and the responses have been...less than helpful.\n\nOne grizzled old man said, 'The what? You mean the labyrinth of lost socks? That's a myth, kid.' Another person, clearly delusional, claimed that the labyrinth was actually a secret entrance to an underground disco party.\n\nBut the Boy remains steadfast, insisting that the talisman is real and that you must find it. So, you continue your search, determined to prove the naysayers wrong and find the fabled talisman.\n\nFinally, in a small hamlet tucked away in the mountains, you hear a rumor that sets your heart racing. A local storyteller whispers of an ancient labyrinth hidden deep beneath the earth, guarded by vicious monsters and deadly traps. The talisman is said to be hidden within its walls, waiting for a hero to claim it.\n\nYou take a deep breath, ready to face the dangers that lie ahead. You've come too far to give up now. It's time to embark on the greatest adventure of your lives!",
        background: "",
        choices: [
        { id: 1, text: "Press on towards the mountains and the underground labyrinth(TO BE CONTINUEDDD)", nextElement: 34 }
        ]
        },
        {
          id: 34,
          text: "Thank you for playing! This is the end of the demo. Please check back soon for updates!",
          background: "",
          choices: [
          ]
          }
      
      

    ];

export default storyElements;

