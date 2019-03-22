'use strict';

function generateId()
{
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getColorByNumber(number) {
  const freq = 3.14159265358 * 2 / 100; // TODO: make it changable from settings
  const red   = Math.round(Math.sin(freq * number + 0) * 127 + 128);
  const green = Math.round(Math.sin(freq * number + 2) * 127 + 128);
  const blue  = Math.round(Math.sin(freq * number + 4) * 127 + 128);
  return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

function getFrequencyByNumber(number) {
  const minFrequency = 200;
  const maxFrequency = 2000;
  const coeff = 0.05;
  return minFrequency + (Math.sin(number * coeff) + 1) * (maxFrequency - minFrequency) / 2;
}

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
      || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());
