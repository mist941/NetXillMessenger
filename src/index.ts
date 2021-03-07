import './styles/index.scss'
import {Planet} from "./scripts/Planet";

interface Animal {
  name: string,
  age: number,
  color: string,
  isTail: boolean,
}

const cat: Animal = {
  name: 'John',
  age: 2,
  color: 'brown',
  isTail: true,
}

const Earth = new Planet({
  radius: 1500,
  race: 'people',
});
Earth.updateRadius = 5000;
console.log(cat);
console.log(Earth);