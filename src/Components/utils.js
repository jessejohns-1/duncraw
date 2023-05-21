export const typeText = (fullText, onFinished, isTypingEffectEnabled) => {
    const delay = 100;  // move the delay inside the function if it's always constant
    
    if (isTypingEffectEnabled) {
      let currentText = '';
      let index = 0;
  
      const intervalId = setInterval(() => {
        if (index < fullText.length) {
          currentText += fullText[index];
          index++;
          onFinished(currentText);
        } else {
          clearInterval(intervalId);
        }
      }, delay);
  
      return () => clearInterval(intervalId); // Function to stop typing
    } else {
      onFinished(fullText); // Immediately finish typing if the effect is disabled
      return () => {}; // No-op function
    }
  }