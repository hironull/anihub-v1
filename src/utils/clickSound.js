// Click sound utility for enhanced UX
class ClickSoundManager {
  constructor() {
    this.audio = null;
    this.isEnabled = true;
    this.init();
  }

  init() {
    try {
      this.audio = new Audio('/click.mp3');
      this.audio.preload = 'auto';
      this.audio.volume = 0.3; // Set volume to 30%
    } catch (error) {
      console.warn('Click sound not available:', error);
      this.isEnabled = false;
    }
  }

  play() {
    if (!this.isEnabled || !this.audio) return;
    
    try {
      // Reset audio to beginning
      this.audio.currentTime = 0;
      // Play the sound
      const playPromise = this.audio.play();
      
      // Handle browsers that return a promise
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Click sound playback failed:', error);
        });
      }
    } catch (error) {
      console.warn('Click sound error:', error);
    }
  }

  setVolume(volume) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }
}

// Create global instance
const clickSound = new ClickSoundManager();

// Helper function to add click sound to any element
export const addClickSound = (element) => {
  if (element) {
    element.addEventListener('click', () => clickSound.play());
  }
};

// Hook for React components
export const useClickSound = () => {
  return {
    play: () => clickSound.play(),
    setVolume: (volume) => clickSound.setVolume(volume),
    enable: () => clickSound.enable(),
    disable: () => clickSound.disable(),
  };
};

export default clickSound;