function add(x, y) {
    let sum = x + y;
    return sum;
}
console.log(add(1, 2))

console.log(((x, y) => {return x+y;})(3, 5))



function pass() {
    console.log("I'll Pass :(")
}
let price = 999
if(price < 1000) {
    console.log("-" + price + " bucks")
}
else{
    pass()
}
for (let _ = 0; _ < 10; _++) {
    console.log("-_-")
}
rray = ['jacob', 'steve', 'tom', 'barack obama', 'ronald reagan']
rray.forEach(element => {
    console.log(element)
});
let person = {
    height: "6'1",
    name: "unc tom",
    employed: "unemployed lol",
    introduction: function(){console.log('His name is ' + person.name + " and he's " + person.height)}
}
person.introduction()

let scammers = ['trump', 'kamala', 'indian scemer']
console.log(scammers[0])
let scammercount = scammers.length
let index = scammers.indexOf('indian scemer')
console.log("There's " + scammercount + ' scammers with indian scemer being the ' + index + ' one')
for(let scammer of scammers){
    console.log(scammer)
}