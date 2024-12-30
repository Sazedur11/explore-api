const user = {
    id: 1,
    name: 'Aamir Gorib',
    job: 'Actor',
    age: 59,
    relegion: 'Muslim'
}

const stringfied = JSON.stringify(user);

console.log(user)
console.log(stringfied)

const jsonObj = JSON.parse(stringfied);
console.log(jsonObj)