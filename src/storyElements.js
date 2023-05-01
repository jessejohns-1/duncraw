const storyElements = [
    {
      id: 1,
      text: "You find yourself standing at the entrance of the bustling city of Duncraw. The noise of merchants hawking their wares and the chatter of townsfolk fills the air. Your journey to this point has been long and arduous, but the city holds the promise of new opportunities and adventure. As you wander through the busy streets, you take in the sights and sounds of the city: the laughter of children playing, the aroma of freshly baked bread, and the colorful tapestries adorning the market stalls. You soon realize that the city is a melting pot of cultures and races, each bringing their own unique flavor to this vibrant urban landscape.\n\nAs you continue to explore, you stumble upon a town crier announcing a grand event taking place in the city square. Intrigued, you make your way through the bustling crowd to learn more about the event. Once you arrive, you see a stage set up with a regal-looking man standing behind a podium. The man, presumably the mayor, addresses the crowd with great enthusiasm. He speaks of two significant events taking place in Duncraw, and he encourages the citizens to participate. Now you must make a choice:",
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102401895429058590/brownsugar_fantasy_vibrant_colors_atmospheric_bustling_city_Dun_fb369802-0167-4fd0-8bea-64f51836bc0e.png?width=454&height=454",
      choices: [
        { id: 1, text: "Join a local treasure hunt", nextElement: 2 },// treasure follow the map
        { id: 2, text: "Assist in a noble's quest", nextElement: 3 },
      ],
    },
    {
      id: 2,
      
      text: "Excited by the prospect of adventure and riches, you decide to join the treasure hunt. The mayor provides you with a cryptic map and a list of riddles to solve. As you follow the map and decipher the riddles, you encounter various challenges and obstacles that test your wit and bravery.",
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102420742248878192/brownsugar_treaure_map_gold_riches_bc3f0cc9-0e05-4d57-895b-0dfee13eb58e.png?width=527&height=527",
      choices: [
        { id: 1, text: "Continue to follow the map", nextElement: 4 },// treasure follow the map
        { id: 2, text: "Abandon the treasure hunt", nextElement: 5 },
      ],
    },
    {
      id: 3,
      background: "",
      text: "Feeling a sense of duty and honor, you choose to assist the noble in his quest. The noble tasks you with finding a long-lost family heirloom, and you set out on a journey filled with perilous encounters, daring escapes, and unexpected allies.",
      choices: [
        { id: 1, text: "Stay loyal to the noble", nextElement: 6 },
        { id: 2, text: "Pursue your own interests", nextElement: 7 },
      ],
    },
    {
      id: 4,
      text: "Determined to continue the treasure hunt, you press on through the winding streets and back alleys of Duncraw. As the sun sets, the city's shadows cast eerie silhouettes against the ancient walls, and the air grows cooler. Your intuition and resourcefulness guide you to a hidden courtyard, where the first riddle awaits. The riddle etched on a stone plaque reads, 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?' With a mixture of excitement and trepidation, you ponder the riddle and decide on your answer.",
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102420742248878192/brownsugar_treaure_map_gold_riches_bc3f0cc9-0e05-4d57-895b-0dfee13eb58e.png?width=527&height=527",
      choices: [
        { id: 1, text: "Answer: 'An echo'", nextElement: 6 },// treasure follow the map
        { id: 2, text: "Answer: 'A ghost'", nextElement: 7 },//dead end game over
      ],
    },
    {
      id: 5,
      text: "Disheartened by the challenges you face, you decide to abandon the treasure hunt. With a heavy heart, you retrace your steps, leaving the cryptic map and riddles behind. As you walk away from the treasure hunt, you contemplate your next move. The bustling city of Duncraw offers a fresh start, but the allure of the unfamiliar world beyond its walls tempts you to keep traveling. Torn between these options, you pause to consider your future.",
      background: "https://your-image-url-here",
      choices: [
        { id: 1, text: "Sit and think about what you've done", nextElement: 8 },// back to the city
        { id: 2, text: "head back to the city", nextElement: 0 },//back to the city
      ],
    },
    {
      id: 6,
      text: "Feeling confident, you declare your answer: 'An echo.' As the word leaves your lips, the stone plaque shimmers and a hidden passage is revealed. You step forward with renewed determination, excited to face the next challenge in your treasure hunt. The passage leads you deeper into the city's underbelly, where more riddles and obstacles await. With each success, you grow more confident in your abilities and inch closer to the treasure.",
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102420742248878192/brownsugar_treaure_map_gold_riches_bc3f0cc9-0e05-4d57-895b-0dfee13eb58e.png?width=527&height=527",
      choices: [
        { id: 1, text: "You walk ahead with fear, and excitement!", nextElement: 9 },// treasure follow the map
      ],
    },{
      id: 7,
      text: "Unsure of your answer, you hesitantly say: 'A ghost.' The moment the words leave your mouth, the stone plaque emits a low, ominous rumble. The hidden passage you hoped to find remains closed, and the courtyard's entrance is sealed shut. You realize you've failed to solve the riddle and are now locked out. With a heavy heart, you search for a way out of the courtyard, leaving the treasure hunt behind.",// on your way to the dead end
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102420742248878192/brownsugar_treaure_map_gold_riches_bc3f0cc9-0e05-4d57-895b-0dfee13eb58e.png?width=527&height=527",
      choices: [
        { id: 1, text: "Abandon the treasure hunt", nextElement: 5 },// you fail abandon the treasure hunt go back to id 5
      ],
    },{
      id: 9,
      text: "With a mix of fear and excitement, you venture forth into the unknown. As you travel deeper into this unfamiliar world, you come across another hidden courtyard. This one contains an even more challenging riddle, etched on a large stone tablet. The riddle reads: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?' You carefully consider the riddle, weighing the possible answers in your mind.",
      choices: [
        { id: 1, text: "Answer: 'A pencil'", nextElement: 10 },
        { id: 2, text: "Answer: 'A diamond'", nextElement: 11 },
  ],
    }
    // ... ( background: "",)
    // here have some boilerplate
    // {
    //   id: ,
    //   text: "',
    //   background: '",
    //   choices: [
    //     { id: 1, text: "text1", nextElement: 0 },// 
    //     { id: 2, text: "text2", nextElement: 0 }
    //   ],
    // },
  ];
  export default storyElements;
  