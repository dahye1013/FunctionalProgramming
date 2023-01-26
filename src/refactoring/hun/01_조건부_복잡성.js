const animalEmoji = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};

console.log(animalEmoji['dragon']);

const printMyAnimal = animal => {
  if (['dog', 'cat'].includes(animal)) {
    console.log(`I have a ${animal}`);
  }
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  let result;

  if (!animal) {
    result = 'No animal';
  } else if (!animal.type) {
    result = 'No animal type';
  } else if (!animal.name) {
    result = 'No animal name';
  } else if (!animal.gender) {
    result = 'No animal gender';
  } else {
    result = `${animal.name} is a ${animal.gender} ${animal.type}`;
  }

  return result;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const colorMap = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum'],
};

const printFruits = color => {
  if (Object.keys(colorMap).includes(color)) {
    return colorMap[color];
  }
  return [];
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  } else {
    console.log('unknown');
  }
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA',
    },
  },
};

const model = car?.model || 'default model';

const street = car?.manufacturer?.address?.street || 'default street';

const phoneNumber = car?.manufacturer?.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
