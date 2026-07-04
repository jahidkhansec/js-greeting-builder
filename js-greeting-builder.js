function formatName(firstName, lastName) {
  return firstName + lastName
}

function getGreeting(timeOfDay) {
}

function createGreeting(firstName, lastName, timeOfDay) {
let greeting;

    if (timeOfDay === 'morning') {
        greeting = 'Good morning';
    } else if (timeOfDay === 'evening') {
        greeting = 'Good evening';
    } else if (timeOfDay === 'afternoon'){
        greeting = 'Good afternoon'
    } else {
        greeting = 'Hello'
    }

return `${greeting}` + `${firstName + lastName}`
}

console.log(createGreeting(' Ava', ' Stone', 'morning'));
console.log(createGreeting(' Noah', ' Kim ', 'evening'));
console.log(createGreeting(' Mina', ' Patel', 'afternoon'));
