const storyElements = [
    {
      id: 1,
      text: 'You arrive at a fork in the road. Which path do you choose?',
      background: 'landing.jpg',
      choices: [
        { id: 1, text: 'Left', nextElement: 2 },
        { id: 2, text: 'Right', nextElement: 3 },
      ],
    },
    {
      id: 2,
      text: 'You encounter a peaceful village. Do you ask for directions or continue on your own?',
      choices: [
        { id: 1, text: 'Ask for directions', nextElement: 4 },
        { id: 2, text: 'Continue on your own', nextElement: 5 },
      ],
    },
    // ... (more story elements)
  ];
  export default storyElements;