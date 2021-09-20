/*****************************************************
 /*         parallell sequence and race
paralell - execute all of the fetch or api calls at the same time
sequential- run the first one, if it succeeds then run the next etc
race- call 3 things but whichever one comes back first ignore the rest

     */
/*****************************************************/


const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 3000)
console.log(a, b, c) // prints: promise{} promise{} promise{}

async function parallel() {
  const promises = [a(), b(), c()]
  const [output1, output2, output3] = await Promise.all(promises)
  return `prallel is done: ${output1} ${output2} ${output3}`
}
// parallel.then(data => console.log(data))
parallel.then(console.log)

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}
race().then(console.log) // returns: 'race is done: a (because a is at 100)

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log) // returns sequence is done a b c but only after all time has passed between the 3 outputs
