const items = ["about", "them", 'they',"him"]
module.exports.items = ["about", "them", 'they',"him"] // alternative way of exporting
const person = {
    name:'him',
    age: '38',
    loaction: 'lagos'
}
console.log(items)
console.log(person)
console.log(module)

console.log("okay",items.reverse())
console.log("SORT",items.sort())
console.log(module.exports = {items, person})
module.exports = {items, person}
console.log(module.exports.singlePerson = person) // alternative way of exporting
module.exports.singlePerson = person
// console