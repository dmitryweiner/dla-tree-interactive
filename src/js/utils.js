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
