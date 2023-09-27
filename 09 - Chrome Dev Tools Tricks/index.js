const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');
console.log(`Hello I am a ${'💩'} string!`);

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Dayum!');

// Info
console.info('I am big');

// Testing
console.assert(1 === 1, 'That is wrong!');

const p = document.querySelector('p');
console.assert(p.classList.contains('zz'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  //console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('hoo');
console.count('hoo');
console.count('hoo');
console.count('kim');
console.count('hoo');
console.count('hoo');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/K-Y-Hoo')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);