import readlineSync from 'readline-sync';
export const greeting = () => {
console.log('May I have your name?');
const name = readlineSync.question('Your answer:  ');
if (name.length === 0) {
    console.log('What!?');
} else {
    console.log(`${'Hello'}, ${name}!`);
}
}
