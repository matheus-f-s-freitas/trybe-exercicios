import { nanoid } from 'nanoid'
import  "./style.css";
import { copy } from 'clipboard-copy'

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  const copy = copy(randomPassword)
  displayPasswordEl.innerHTML = randomPassword;
});