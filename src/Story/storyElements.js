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
  text: "You hang up the phone, the cryptic conversation with Professor Kholvaz still ringing in your ears. The apartment around you now seems like a labyrinth of mysteries waiting to be uncovered. A strange yet strong urge compels you to explore your surroundings, searching for answers to the questions swirling in your mind.\n\nAs you stride across the room, each step resonates with a soft creak on the weathered wooden floor, the sound echoing within the four walls like an ancient chant. The furnishings are simple yet carry an air of antiquity, each item a silent testament to countless stories they might have witnessed.\n\nYour hand brushes against the sturdy table, its wooden surface wearing the traces of time. You wonder who sat here before you, what they pondered, what they achieved. An unassuming chair in the corner of the room, seemingly undisturbed for a while, whispers tales of solitary moments and introspective journeys.\n\nA foggy view outside the window captures your attention. The world outside seems distant, as if blurred by the veil of forgetfulness. Turning back to the room, your eyes land on a small, dusty painting. It depicts an exotic landscape, possibly the Ionisia Kingdom that Professor Kholvaz mentioned. The colors and imagery spark a sense of déjà vu, as if you've seen it before.\n\nAs you explore, your connection with this place deepens. Yet, the more you see, the more questions arise. Who are you really? And why are you here? Amidst the growing web of mysteries, the phone begins to ring again. If you get stuck check the settings page and enable hints",
  validCommands: ['phone', 'table', 'chair', 'window', 'painting'],
  background: room,
  character: 'main',
  image: 'main',
  choices: [
    { id: 'answer', text: "Answer the phone", nextElement: 'second_call' },
    { id: 'freeform', text: "Enter a command or search term...", nextElement: 'freeform_response' }
  ],
},
//////////////////////////searchables in apartment
{
  id: 'phone',
  background: room,
  text: "You take a closer look at the phone. It's an old rotary dial phone, the kind you might find in a vintage store. There doesn't seem to be anything unusual about it.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'exploration' },
  ],
},{
  id: 'table',
  background: room,
  text: "You approach the table, its surface adorned with a thin layer of dust. Various objects rest upon it, seemingly frozen in time. There is a collection of antique books, an ornate candlestick, and a small wooden box. As you run your fingers along the table's edges, you notice a hidden compartment beneath the books. With a gentle pull, the compartment slides open, revealing a mysterious key.",
  inventoryAction: {
    type: "add",
    item: {
      name: "mysterious key",
      type: "item",
    },
  },
  choices: [
    { id: 'search', text: "Search for where to use the key", nextElement: 'search' },
  ],
},
{
  id: 'search',
  background: room,
  text: "You carefully examine the key in your hand, intrigued by its mysterious nature. It feels significant, as if it holds the key to unlocking a hidden secret. With determination in your eyes, you embark on a quest to find the right place to use the key.\n\nYou begin your search, exploring every nook and cranny of the room. You inspect the walls, tapping on them in hopes of discovering a hollow sound that might indicate a hidden compartment. You try the key on various locked cabinets and drawers, feeling a mix of anticipation and curiosity with each attempt.\n\nAs time passes, you become increasingly aware of the weight of the key in your hand. It serves as a constant reminder of the mysteries that await you, urging you to continue your search. Your determination grows stronger with each unsuccessful attempt, driving you to explore every inch of the room and beyond.\n\nThe search for the perfect lock to fit the key is both thrilling and challenging. Will you uncover the secret it holds? Only time will tell.",
  validCommands: ['wall', 'cabinet', 'drawer','door'],
  choices: [
    { id: 'freeform', text: "Enter a command or search term...",nextElement: 'freeform_response' },
  ],
},
{
  id: 'chair',
  background: room,
  text: "You approach the chair in the corner of the room. It is a simple wooden chair, worn from years of use. As you inspect it, you notice faint indentations on the seat, suggesting that someone spent a significant amount of time sitting here. The chair seems to hold stories of contemplation and solitude, but there is nothing else of note about it.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'exploration' },
  ],
},{
  id: 'window',
  background: room,
  image: 'window',
  text: "You gaze out of the window, peering through the foggy glass pane. The muted patter of rain against the windowpane serves as a comforting rhythm, grounding you in this new reality. The outside world appears hazy and distant, as if separated by an ethereal barrier. Sunlight filters through the fog and raindrops, casting a soft glow in the room. You find yourself captivated by the interplay of light, shadow, and rain, as if it holds a secret message just out of reach.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'exploration' },
  ],
},{
  id: 'painting',
  background: 'painting.jpg',
  text: "As you step closer to the painting, you're immediately captivated by its mesmerizing beauty. The canvas is filled with an intricate tapestry of colors, expertly blended together to evoke a sense of awe and wonder. The brushstrokes are masterful, each stroke revealing the artist's skill and passion. You find yourself getting lost in the details, as if the painting holds a secret world within its frame. It's a true work of art that effortlessly transports you to another realm, where emotions and imagination intertwine. You can't help but admire the artist's talent and dedication in bringing such a masterpiece to life.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: 'Go back', nextElement: 'exploration' },
  ],
},
//////////////////keyhole
{
  id: 'wall',
  background: room,
  text: "You approach the wall, running your hand along its surface. It feels solid and unyielding, like a barrier protecting hidden secrets. As you inspect it more closely, you notice a subtle irregularity in the texture. There is a hairline crack that extends from floor to ceiling, almost invisible to the naked eye. Your curiosity piqued, you wonder if this crack holds any significance or leads to something hidden beyond the wall.\n\nYou contemplate the meaning behind this mysterious crack and its potential connection to the key in your possession. Could it be a concealed entrance or a symbol of a deeper mystery? The answer lies within the secrets that await your discovery.\n\nYou step back, taking in the entirety of the wall, determined to unravel its enigma. With the key in hand, you can't help but wonder if it is the key that will unlock the truth hidden behind this seemingly ordinary surface.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'search' },
  ],
},

{
  id: 'cabinet',
  background: room,
  text: "You approach the cabinet, its polished surface reflecting a glimmer of light. The cabinet is sturdy, with ornate carvings and brass handles. As you open the doors, a faint scent of aged wood wafts through the air. Inside, you find an assortment of objects neatly arranged on shelves. There are old photographs, delicate porcelain figurines, and a stack of dusty journals.\n\nYou carefully inspect each item, searching for any hidden compartments or clues. Your fingertips trace the engravings on the figurines, your eyes scanning the faded photographs for familiar faces. The journals beckon you to uncover their secrets, but they remain locked with an air of mystery.\n\nAs you explore the contents of the cabinet, you can't help but wonder if the key you possess might hold the answer to unlocking the hidden treasures within. Could it be that the cabinet conceals more than meets the eye? Only further investigation will reveal the truth.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'exploration' },
  ],
},

{
  id: 'drawer',
  background: room,
  text: "You approach the drawer, its wooden surface smooth to the touch. It is a modest drawer, unadorned and blending seamlessly with the surrounding furniture. As you pull it open, a faint scent of cedar fills the air, reminiscent of memories long past. Inside, you find an array of items meticulously organized. There are bundles of handwritten letters, delicate trinkets, and a small brass key nestled among them.\n\nYou carefully examine each item, immersing yourself in the stories they hold. The letters, inked with emotions, reveal snippets of heartfelt conversations. The trinkets, worn with time, whisper tales of cherished moments. Your gaze fixates on the brass key, a tangible link to a hidden world waiting to be unlocked.\n\nAs you delve deeper into the contents of the drawer, you can't help but wonder what secrets it holds. Could the key you possess be the missing piece to unraveling the enigma within? The answers lie within these tangible fragments of the past, beckoning you to uncover their hidden truths.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'exploration' },
  ],
},
{
  id: 'floor',
  background: room,
  text: "You shift your attention downward and focus on the floor beneath your feet. It's worn and weathered, bearing the marks of countless footsteps that have traversed its surface. The floorboards creak with each step, their protestations a testament to the passage of time.\n\nAs you examine the floor, you notice subtle patterns in the wood grain—a mosaic of memories etched into the very foundation of this place. Some boards are loose, creating an uneven path that requires careful navigation. The irregularities in the floor mirror the uncertainties and challenges that lie ahead.\n\nThe faint echoes of distant conversations and muffled footsteps seep through the floor, whispering tales of the building's past. The floor seems to hold the secrets of those who once walked these halls, inviting you to uncover the hidden stories woven into its fibers.\n\nYou take a moment to absorb the energy emanating from the floor, acknowledging the weight of the past that lingers here. With each step, you move forward, following the path laid out before you, ready to unravel the mysteries that await.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "Go back", nextElement: 'search' },
  ],
},
{
  id: 'door',
  background: room,
  text: "You approach the door, your only gateway to the outside world. As you try the doorknob, you realize it is locked from the inside. A feeling of confinement washes over you, fueling your desire to escape. You search your pockets and find a small key—the one you discovered earlier. With a surge of hope, you insert the key into the lock and turn it.\n\nClick! The lock disengages, and the door creaks open, revealing a sliver of freedom beyond. A rush of fresh air greets your senses, a tantalizing reminder of the vast possibilities that lie beyond these walls.\n\nWith each step towards the open door, you leave behind the confines of the room. As the door closes behind you, a mixture of trepidation and excitement fills your heart. The world outside beckons, ready to unfold its wonders and challenges. The journey awaits, and you are prepared to embrace it.",
  validCommands: ['back'],
  choices: [
    { id: 'continue', text: "continue", nextElement: 'hallway' },
  ],
},
///////////keyhole


//////////////////////////searchables in apartment
{
  id: 'hallway',
  background: "",
  text: "You step out of the room and find yourself in a dimly lit hallway, the faded wallpaper peeling off the walls. The air is heavy with a musty scent, a reminder of neglect and time's relentless march. The hallway stretches out before you, its length disappearing into darkness. A flickering lightbulb intermittently illuminates the corridor, casting eerie shadows that dance on the walls.\n\nAs you take your first steps, a sense of unease settles in. Each creaking floorboard beneath your feet echoes through the silence, amplifying the emptiness of the building. The doors along the hallway stand closed and weathered, hiding their secrets within. You can't help but wonder what stories lie behind those doors—tales of joy, sorrow, and forgotten dreams.\n\nThe sound of distant footsteps echoes through the hall, making you pause. Is someone else here, or is it merely an echo of memories long past? The uncertainty gnaws at you, heightening your awareness of the unfamiliar surroundings.\n\nYou steel yourself and continue down the hallway, guided by a mix of curiosity and trepidation. The unknown awaits, and with each step, you move further into the heart of the building, yearning to uncover the mysteries that shroud this forgotten place.",
  validCommands: ['back'],
  choices: [
    { id: 'back', text: "to be continued", nextElement: 'exploration' },
  ],
},
];

export default storyElements;
