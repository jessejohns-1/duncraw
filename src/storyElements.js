const storyElements = [
    {
      id: 1,
      text: "You find yourself standing at the entrance of the bustling city of Duncraw. The noise of merchants hawking their wares and the chatter of townsfolk fills the air. Your journey to this point has been long and arduous, but the city holds the promise of new opportunities and adventure. As you wander through the busy streets, you take in the sights and sounds of the city: the laughter of children playing, the aroma of freshly baked bread, and the colorful tapestries adorning the market stalls. You soon realize that the city is a melting pot of cultures and races, each bringing their own unique flavor to this vibrant urban landscape.\n\nAs you continue to explore, you stumble upon a town crier announcing a grand event taking place in the city square. Intrigued, you make your way through the bustling crowd to learn more about the event. Once you arrive, you see a stage set up with a regal-looking man standing behind a podium. The man, presumably the mayor, addresses the crowd with great enthusiasm. He speaks of two significant events taking place in Duncraw, and he encourages the citizens to participate. Now you must make a choice:",
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102401895429058590/brownsugar_fantasy_vibrant_colors_atmospheric_bustling_city_Dun_fb369802-0167-4fd0-8bea-64f51836bc0e.png?width=454&height=454",
      choices: [
        { id: 1, text: "Join a local treasure hunt", nextElement: 2 },
        { id: 2, text: "Assist in a noble's quest", nextElement: 3 },
      ],
    },
    {
      id: 2,
      
      text: "Excited by the prospect of adventure and riches, you decide to join the treasure hunt. The mayor provides you with a cryptic map and a list of riddles to solve. As you follow the map and decipher the riddles, you encounter various challenges and obstacles that test your wit and bravery.",
      background: "https://media.discordapp.net/attachments/1067430982522781707/1102420742248878192/brownsugar_treaure_map_gold_riches_bc3f0cc9-0e05-4d57-895b-0dfee13eb58e.png?width=527&height=527",
      choices: [
        { id: 1, text: "Continue to follow the map", nextElement: 4 },
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
    // ... ( background: "",)
  ];
  export default storyElements;
  