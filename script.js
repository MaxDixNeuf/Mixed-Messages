//const artistArr = ['John Lennon', 'The Beatles']

// Helper Function
const randomSth = (arr) => Math.floor(Math.random() * arr.length);
// Random Artist
//const randomArtist = artistArr[randomSth(artistArr)]

const songArr = ['High - Lighthouse Family',
                 'Imagine - John Lenon',
                 'What a wonderful world - Louis Armstrong',
                 'Where is the Love? - Black Eyed Peas',
                 'Tear in Heaven - Eric Clapton'];
const msg1Arr = ['will always keep me flying high in the sky of love',
                 'may say i’m dreamer but i’m not the only one',
                 'think to myself what a wonderful world',
                 'cause people got me got me questioning Where is the love?',
                 'know my name? if I saw you in heaven'];
const msg2Arr = ['At the end of the day, Remember the way, Stay so close till the end',
                 'Hope some day you’ll join us and the world would be as one',
                 'See friends shaking hands saying how do you do',
                 'ake control of your mind and meditate Let you soul gravitate to the love y’all',
                 'Must be strong and carry on cause I know you don’t belong here in heaven'];
const randomSong = songArr[randomSth(songArr)];
const randomMsg1 = msg1Arr[randomSth(msg1Arr)];
const randomMsg2 = msg2Arr[randomSth(msg2Arr)];

console.log(`Today you should listening to ${randomSong}! Because you ${randomMsg1}. and You should ${randomMsg2}.`);