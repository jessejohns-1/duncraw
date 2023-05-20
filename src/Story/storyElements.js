import vibrance from '../image/vibrance.gif';
const storyElements = [
{
  id: 'beginning',
  text: "Hey there! So, you find yourself here, huh? Don't bother asking or wondering where we are. Trust me, it's a place you wouldn't believe even if I described it to you. Picture a mashup of interdimensional chaos, existential absurdity, and a touch of cosmic weirdness. Yeah, it's that messed up.",
  character: 'main',
  image: 'main',
  background: '',
  choices: [
    { id: 'continue', text: 'Continue', nextElement: 'academic_struggles' },
  ],
},
  {
    id: 'academic_struggles',
    text: "The pull of destiny eases, and you step forward, crossing the threshold into your new existence. The door creaks shut behind you, closing out the celestial echoes of your birth. As your eyes adjust to the dim light, you're greeted with the sight of an old but homely apartment.\n\nThe floor beneath you is worn but welcoming, the wooden planks groaning slightly under your weight, telling tales of those who have tread here before you. Your eyes wander to the simple, rustic furnishings - a sturdy table here, a comforting armchair there. A singular window punctuates the far wall, allowing a cascade of muted sunlight to spill into the room, illuminating the dust particles dancing in the air.\n\nIt's not grand or regal, but it radiates warmth, an echo of many quiet and comforting days. And though the cosmos beckon from outside the window, it's here in this humble dwelling that your journey truly begins.",
    background: vibrance,
    character: 'main',
    image: 'main',
    choices: [
      { id: 'continue', text: "Continue", nextElement: 'devastating_news' },
    ],
},
  {
    id: 'devastating_news',
    text: "Yet, just when it seemed the universe was aligning to grant the child's celestial desires, a devastating revelation shook their world. Like a meteor crashing down from the heavens, they received heart-wrenching news—a health condition that rendered their dreams of becoming an astronaut impossible. The very fabric of their universe unraveled, and despair cast its shadow over the once-illuminated path.\n\nIn the depths of their anguish, the child's spirit faltered, and their dreams of traversing the cosmic tapestry seemed to fade. The stars that once ignited their imagination now appeared distant and unattainable. Little did they know that their latent powers, bestowed upon them by the divine deity who birthed them, held the potential to reshape their destiny. Unbeknownst to the child, their abilities were a double-edged sword, capable of both destruction and salvation. As their journey unfolded, the true purpose of their extraordinary powers would be revealed.",
    background: "",
    choices: [
      { id: 'continue', text: "Continue", nextElement: 'glimmer_of_hope' },
    ],
  },
]
export default storyElements;


 