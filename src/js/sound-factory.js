'use strict';

class SoundFactory {

  static createSound(context, frequency, delay) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    //oscillator.connect(context.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    return {
      play: () => {
        gain.gain.setValueAtTime(0, context.currentTime);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + delay);

        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + delay);
      }
    };
  }

}