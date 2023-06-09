export const typeText = (text, setText, isTypingEffectEnabled, typingSpeed, validCommands) => {
  let delay = 0; // Delay between typing each character

  if (isTypingEffectEnabled && typingSpeed !== 'off') {
    switch (typingSpeed) {
      case 'slow':
        delay = 100; // Adjust the delay for slow speed
        break;
      case 'medium':
        delay = 50; // Adjust the delay for medium speed
        break;
      case 'fast':
        delay = 25; // Adjust the delay for fast speed
        break;
      default:
        delay = 50; // Default to medium speed if no valid speed is provided
        break;
    }
  }

  let currentIndex = 0; // Index of the current character being typed

  if (typingSpeed === 'off') {
    setText(text); // Set the full text immediately if typing speed is "off"
  } else {
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval); // Stop typing when all characters are typed
      }

      const currentCharacter = text[currentIndex];

      // Check if the current character is part of any valid command
      const isKeyword = validCommands.some((keyword) =>
        text.substr(currentIndex, keyword.length).toLowerCase() === keyword.toLowerCase()
      );

      setText((prevText) => (
        <>
          {prevText}
          <span style={{ color: isKeyword ? 'green' : 'inherit' }}>{currentCharacter}</span>
        </>
      ));

      currentIndex++; // Move to the next character
    }, delay);

    // Return a function to stop the typing effect when the component unmounts or when typing is disabled
    return () => {
      clearInterval(typingInterval);
    };
  }
};