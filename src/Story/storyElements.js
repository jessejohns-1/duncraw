import room from '../image/mainroom1.gif';

const storyElements = [
  {
    id: 'beginning',
    text: 'Welcome userName to my project! This is a constantly updating story that I am working on. I hope you enjoy it! I love feedback, so please let me know what you think! jessejohns45@gmail.com',
    choices: [
      { id: 'continue', text: 'Continue', nextElement: 'sowebegin' },
    ],
  },
  {
    id: 'sowebegin',
    text: "Emerging from the unfathomable depths of unconsciousness, you awake in a hazy, dreamlike state. Your senses are enveloped in a fog of uncertainty, a realm suspended between the familiar and the foreign. Everything feels distant, yet eerily intimate, as if you are simultaneously an observer and a participant in this enigmatic narrative.\n\nSummoned by a magnetic pull, you approach a peculiar door. Seeming to materialize out of thin air, the door stands as a portal into the unknown. Compelled by an instinctive curiosity, you cross the threshold and instantly, reality appears to solidify around you.\n\nYou find yourself standing in an antique yet cozy apartment, imbued with a warm homeliness that soothes your initial disorientation. The muted patter of rain against the windowpane serves as a comforting rhythm, grounding you in this new reality. Just then, a phone begins to ring, the sound slicing through the tranquil silence, a beacon demanding your attention.\n\nAs you adjust to your surroundings, you become aware of the potential adventures that await you. Despite the circumstances, you feel a sense of calmness and curiosity. The cryptic phone ring is an invitation, an opportunity to discover the true nature of this place and your role within it.",
    background: room,
    character: 'main',
    image: 'main',
    choices: [
      { id: 'continue', text: "Continue", nextElement: 'unexpected_encounter' },
    ],
},
{
  id: 'unexpected_encounter',
  text: "With a sense of trepidation mixed with curiosity, you approach the ringing phone. The mere act of lifting the receiver feels as though you are accepting an invitation to a cryptic journey. The moment your ear meets the speaker, the droning ring is replaced by a voice. It's a man's voice - steady, cool, and slightly compelling. The words fall around you like a velvet drape, warm and oddly comforting.\n\nHe introduces himself with an unusual name that is somehow familiar. The conversation, if it can be called that, feels less like a dialogue and more like a soliloquy recited just for you. Each word seems to carry a weight, a story, a riddle. The voice, unhurried, continues to speak, drawing you in deeper into its enigma.\n\nAs the call progresses, you find yourself inexplicably drawn into the narrative, the voice, the unfolding story. Despite the initial shock, you find yourself more curious than scared, more excited than wary. This, you realize, is no ordinary encounter. It is the beginning of a peculiar adventure that you didn't ask for, but can't help but follow.",
  background: room,
  character: 'phone',
  image: "phone",
  choices: [
    { id: 'continue', text: "Continue", nextElement: 'proposal' },
  ],
},
{
  id: 'proposal',
  text: "The voice on the other end of the line resonates with a depth and certainty that almost make you forget the surrealism of the situation. 'I am Professor Kholvaz, a scholar from the elusive Ionisia Kingdom,' the man introduces himself. His words, laden with the weight of wisdom and countless stories, seem surprisingly plausible.\n\n'Hello, userName,' he continues, sending a shiver down your spine. The mention of your name raises questions that spiral in your mind - how does he know who you are? How do you even know that's your name? A sense of amnesia clings to you, making you realize you can't remember who you are or where you come from. The only thing you can hold onto is this name, 'userName'. \n\nHowever, the stranger's next words, spoken with an unexpected warmth, suppress your burgeoning fear, 'I have been expecting you here for quite some time.' The statement hangs in the air, inviting more questions than answers. Why would he be expecting you? What role do you play in this cryptic narrative?\n\nDespite the swirling vortex of questions, one thing stands clear - you are part of a story that is far more significant and intricate than anything you could have envisioned.",
  background: room,
  character: 'dreads',
  image: 'dreads',
  choices: [
    { id: 'accept', text: "continue", nextElement: 'start_of_adventure' },
  ],
},
{
  id: 'start_of_adventure',
  text: "The line goes quiet for a moment, Professor Kholvaz's words reverberating in your mind. An inexplicable anticipation thrums through your veins as you consider the implications of his statement. How could he have been expecting you? Why you?\n\nAs these questions cloud your mind, you notice a change in the room. The quaint apartment, once static and unmoving, seems to be subtly shifting around you. The walls ripple like the surface of a pond disturbed by a falling pebble, the floor vibrates ever so slightly, and the space seems to breathe with an unknown life. The phone in your hand feels heavy with promise and secrets.\n\nAn undeniable pull grips your heart, urging you to plunge into this new realm of possibilities. The normal, everyday life you knew seems distant now, replaced by this surreal narrative. A newfound determination sets in - you are a part of this story now, and you are ready to uncover the mysteries that Professor Kholvaz has hinted at.",
  background: room,
  character: 'main',
  image: 'main',
  choices: [
    { id: 'explore', text: "Explore the apartment", nextElement: 'exploration' },
    { id: 'call_back', text: "Call Professor Kholvaz back", nextElement: 'call_back' },
  ],
},

/////////////call back ///////////////////////////////
{
  id: 'call_back',
  text: "Deciding to seek answers directly from the source, you dial the number that just called. The steady, rhythmic sound of the dial tone is abruptly interrupted by an impersonal, mechanical voice: 'I'm sorry, but the line you are trying to reach is no longer in service or has been disconnected.'\n\nThe sudden dead-end adds another layer of mystery to the situation. The voice of Professor Kholvaz, the peculiar dialogue, and now this - everything seemed as if it was part of a dream, too bizarre to be reality.\n\nThe apartment feels even more enigmatic now. Silence settles in the room, wrapping everything in a cloak of uncertainty. It appears you're left with one option for now: to explore your surroundings and search for clues that might shed light on your current predicament.",
  background: room,
  character: 'main',
  image: 'main',
  choices: [
    { id: 'explore', text: "Explore the apartment", nextElement: 'exploration' },
  ],
},
//call back ///////////////////////////////


////////////////////////// search apartment ///////////////////////////////
{
  id: 'exploration',
  text: "You hang up the phone, the cryptic conversation with Professor Kholvaz still ringing in your ears. The apartment around you now seems like a labyrinth of mysteries waiting to be uncovered. A strange yet strong urge compels you to explore your surroundings, searching for answers to the questions swirling in your mind.\n\nAs you stride across the room, each step resonates with a soft creak on the weathered wooden floor, the sound echoing within the four walls like an ancient chant. The furnishings are simple yet carry an air of antiquity, each item a silent testament to countless stories they might have witnessed.\n\nYour hand brushes against the sturdy table, its wooden surface wearing the traces of time. You wonder who sat here before you, what they pondered, what they achieved. An unassuming chair in the corner of the room, seemingly undisturbed for a while, whispers tales of solitary moments and introspective journeys.\n\nA foggy view outside the window captures your attention. The world outside seems distant, as if blurred by the veil of forgetfulness. Turning back to the room, your eyes land on a small, dusty painting. It depicts an exotic landscape, possibly the Ionisia Kingdom that Professor Kholvaz mentioned. The colors and imagery spark a sense of déjà vu, as if you've seen it before.\n\nAs you explore, your connection with this place deepens. Yet, the more you see, the more questions arise. Who are you really? And why are you here? Amidst the growing web of mysteries, the phone begins to ring again.",
  background: room,
  character: 'main',
  image: 'main',
  choices: [
    { id: 'answer', text: "Answer the phone", nextElement: 'second_call' },
  ],
},
{
  id: 'second_call',
  text: "The phone's persistent ring breaks your chain of thoughts. With a sense of trepidation, you pick up the receiver once more. This time, the voice on the other end is noticeably softer, yet firm. 'You have begun the exploration, haven't you?' Professor Kholvaz inquires. His words aren't accusatory, rather, they carry a note of encouragement.\n\n'You're on the right path, userName,' he continues, a hint of a smile detectable in his tone. 'I cannot give you all the answers, but I can assure you this: every piece in this apartment holds a story, a clue. Look closer, look deeper.'\n\nBefore you can respond, the line goes dead once more, leaving you with a fresh set of cryptic advice. His words echo in your mind as you look around the room. The apartment isn't just an apartment anymore, it's a puzzle waiting to be solved.",
  background: room,
  character: 'main',
  image: 'main',
  choices: [
    { id: 'explore_more', text: "Explore the apartment deeper", nextElement: 'deeper_exploration' },
    { id: 'ponder', text: "Ponder over the call", nextElement: 'pondering' },
  ],
},

];

export default storyElements;
