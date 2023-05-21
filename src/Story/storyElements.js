import room from '../image/mainroom1.gif';

const storyElements = [
  {
    id: 'beginning',
    text: 'Welcome ${userName}! to my project! This is a constantly updating story that I am working on. I hope you enjoy it! I love feedback, so please let me know what you think! jessejohns45@gmail.com',
    choices: [
      { id: 'continue', text: 'Continue', nextElement: 'sowebegin' },
    ],
  },
  {
    id: 'sowebegin',
    text: "As you boldly step across the threshold, the gravitational forces of destiny gently guide you into an entirely new existence. The door closes behind you with an almost poetic creak, as if bidding farewell to the celestial echoes of your birth. Adjusting your vision to the dimly lit surroundings, you find yourself in an apartment that exudes an intriguing blend of antiquity and homeliness.\n\nThe weathered floor beneath your feet emits a subtle symphony of creaks, hinting at the countless souls who have embarked on their own journeys within these walls. Your gaze wanders across the room, encountering an array of dated furnishings. A sturdy table stands with unwavering resilience, serving as a symbol of intellectual conquests, while an unassuming wooden desk chair reminds you of countless late-night study sessions filled with equal parts discomfort and determination. The windows grant you a glimpse of the foggy outside world, where the interplay of muted sunlight and ethereal dust particles creates a serene spectacle.\n\nThough not opulent or extravagant, this humble abode emanates an indescribable warmth—a testament to the tranquil moments it has witnessed. Amidst the cosmic allure that beckons beyond the window, it is within these unassuming walls that your transformative journey truly takes flight.",
    background: room,
    character: 'main',
    image: 'main',
    choices: [
      { id: 'continue', text: "Continue", nextElement: 'unexpected_encounter' },
    ],
  },
  {
    id: 'unexpected_encounter',
    text: "As you settle into the comfort of your new dwelling, a peculiar sensation tingles in the air. The atmosphere grows hushed, and your attention is captivated by a faint whisper that glides through the room. Your curiosity piqued, you turn towards the source of the sound, only to be met with an enigmatic sight—a mesmerizing shadow that gradually takes form, unveiling a distinguished figure in its midst.",
    background: room,
    character: 'dreads',
    image: 'dreads',
    choices: [
      { id: 'continue', text: "Continue", nextElement: 'proposal' },
    ],
  },
  {
    id: 'proposal',
    text: "The shadowy silhouette solidifies into a gentleman of utmost elegance and intrigue. With a flourish, he introduces himself as Professor Kholvaz, a renowned scholar hailing from the mysterious Ionisia Kingdom. His voice resonates with wisdom and carries an air of enigma, instantly captivating your imagination.",
    background: room,
    character: 'professor',
    image: 'squirrel',
    choices: [
      { id: 'accept', text: "end for now", nextElement: 'beginning' },

    ],
  },
];

export default storyElements;
