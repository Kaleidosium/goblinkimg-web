// Based on https://stackoverflow.com/a/73916429/10916748
"use strict";

const openLinksArray = function (links) {
  // get a random number between 0 and the number of links
  // and round it, so it can be used as array index
  const randIdx = parseInt(Math.random() * links.length, 10);
  // construct the link to be opened
  const link = "https://" + links[randIdx];
  // open it in a new window or tab (depends on browser setting)
  window.open(link);
};
