// Based on https://stackoverflow.com/a/73916429/10916748
"use strict";

const musicLinks = [
  "youtu.be/gC11HJ99Egs",
  "youtu.be/AsvhQ-soLdg",
  "youtu.be/Rm97VG_QIXI",
  "youtu.be/ahwLFyMZTZw",
];
const funLinks = [
  "theuselessweb.com",
  "boredbutton.com",
  "yourethemannowdog.ytmnd.com",
  "something.com",
  "zombo.com",
];

const openLink = function (links) {
  // get a random number between 0 and the number of links
  // and round it, so it can be used as array index
  const randIdx = parseInt(Math.random() * links.length, 10);
  // construct the link to be opened
  const link = "https://" + links[randIdx];
  // open it in a new window or tab (depends on browser setting)
  window.open(link);
};
