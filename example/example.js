import throttle from 'lodash.throttle';
import { embaralha } from '../index.js';

const throttledEmbaralha = (elem, time) => {
  const throttleTime = time + 70;
  return throttle(() => embaralha(elem, time), throttleTime);
};

const main = () => {
  const body = document.querySelector('body');
  for (const elem of body.childNodes) {
    // Added a timeout to stop it from executing multiple times at once,
    // Note the timeout is 50 more than initial because it might go over when both are 1000
    setTimeout(() => {elem.addEventListener('mouseover', throttledEmbaralha(elem, 1000))}, 1050);
  }

  // If you want to target classes instead of every element on the page.
  // const text = document.getElementsByClassName('text');
  // for (const elem of text) {
  //   setTimeout(() => {elem.addEventListener('mouseover', throttledEmbaralha(elem, 1000))}, 1050);
  // }
}

main();
