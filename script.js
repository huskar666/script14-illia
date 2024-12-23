const users = [
    {name: 'illia', age: 52, eyeColor: 'green', gender: 'man', isActive: true, email: 'illia.papich@gmail.com'},
    {name: 'masha', age: 25, eyeColor: 'blue', gender: 'woman', isActive: true, email: 'masha.papich@gmail.com'},
    {name: 'maksim', age: 88, eyeColor: 'gray', gender: 'man', isActive: false, email: 'maksim.papich@gmail.com'}
]
const names = users.map(item => item.name);
console.log(names);

const getColor = (users, color) => {
    return users.filter(item => item.eyeColor === color);
}
const blueEye = getColor(users, 'blue');
console.log(blueEye);

const getGender = (users, gender) => {
    return users
    .filter(item => item.gender === gender)
    .map(item => item.name);
}
const manUsers = getGender(users, 'man');
console.log(manUsers);
const womanUsers = getGender(users, 'woman');
console.log(womanUsers);


const getInactive = users => 
    users.filter(item => !item.isActive);
console.log(getInactive(users));


const getEmail = (users, email) => 
    users.find(item => item.email === email);
console.log(getEmail(users, 'masha.papich@gmail.com'));


const getMinMaxAge = (users, min, max) =>
    users.filter(item => item.age >= min && item.age <= max);
console.log(getMinMaxAge(users, 50, 80));