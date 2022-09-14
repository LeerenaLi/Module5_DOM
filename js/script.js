'use strict';

const cardItems = document.querySelectorAll('.item');
const h2 = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');
const propItemsFour = document.querySelectorAll('.props__item_four');
const propItemsTwo = document.querySelectorAll('.props__item_two');
const images = document.querySelectorAll('.item__image');

cardItems[3].after(cardItems[0]);
propsList[2].before(h2[3]);
propsList[5].before(h2[1]);
h2[2].textContent = 'This и прототипы объектов';
h2[2].after(propsList[4]);
images[4].after(h2[4]);
h2[4].after(propsList[3]);
propItemsFour[3].before(propItemsFour[5]);
propItemsTwo[7].after(propItemsTwo[8]);
propItemsTwo[8].after(propItemsTwo[9]);
