const printHelloWorld = () => {
  console.log('Hello World');
};

module.exports = {
  printHelloWorld,
}

const func = require('./a.js')
func.printHelloWorld();


////////////////////////////////////////////////////////////////
const A = () => {};
export default A;

export const B = () => {};

import A from 'moduleA';
import {B} from 'moduleB';
