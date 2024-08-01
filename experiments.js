const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

// strings
const myName = "Brian Holt";
console.log(myName);

const firstName = "Brian";
const lastName = "Holt";

// string concat
const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
// template strings
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

// boolean
const lightIsOn = true;

// conditionals
const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

// while loop
let friendsAtYourPartyToo = 0;
while (friendsAtYourPartyToo < 10) {
    friendsAtYourPartyToo = friendsAtYourPartyToo + 1;
}
console.log(friendsAtYourPartyToo);

// for loop
let friendsAtYourPartyThree = 0;
for (let i = 0; i <= 10; i++) {
    friendsAtYourPartyThree++;
}
console.log(friendsAtYourPartyThree);

// increments
let friendsAtYourPartyFour = 0;
friendsAtYourPartyFour = friendsAtYourPartyFour + 1;
friendsAtYourPartyFour += 1;
friendsAtYourPartyFour++;
++friendsAtYourPartyFour;
console.log(friendsAtYourPartyFour);

// exercise
const character = 100;
const timesToRepeat = 10;

let word = "";
for (let i = 0; i<timesToRepeat; i++) {
    word = word + character;
}

console.log(word);

// function
function bark() {
	console.log('woof');
}

const meow = function () {
  console.log("meeeeeeeow");
};

// the => is just = > put together, the font just combines them to one glyph
const chirp = () => {
  console.log("chirp chirp");
};

bark();
meow();
chirp();

// scope
const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope