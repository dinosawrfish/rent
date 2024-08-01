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

// builtins examples
const sentenceTwo = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence = sentenceTwo.toLowerCase();
console.log(lowerCaseSentence);

// want to round a number? use Math!
const number = 5.3;
const roundedNumber = Math.round(number);
console.log(number);

// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
      "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));

// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());

// objects
const me = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      city: "Seattle",
      state: "WA",
      country: "USA",
    },
    speak() {
        console.log("hello");
      },
  };

  console.log(me.name.first);
  console.log(me.location.state);

  //context
  const meTwo = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA",
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    },
  };

  console.log(meTwo.getAddress());

  //arrays
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek.join(" | "))

  const courses = [
    { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
  ];

  courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });
  console.log(courses);
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" };
  console.log(courses);

  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
  ];

  // method 1
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }

  // method 2
  cities.forEach(function (city) {
    console.log(city);
  });