//Object destructuring
const obj = {
    name : "sakthi",
    age : 23,
   // address : {
    //    location : "tirupattur",
   //     pin : 635653,
   //     village : "pichanoor"
   // } 
}

const {address =10} = obj

const {pin} = address

console.log(address)

//console.log(pin)

//Array destructuring

const arr = ['china', 'india', 'US']

const [ two, five ] = arr

//console.log(two, five)

//Array of object destructuring

const arrofobj = [
    {
        name : "sakthi",
        age : 23,
        address : {
            location : "tirupattur",
            pin : 635653,
            village : "pichanoor"
        } 
    },
    {
        name : "vetri",
        age : 21,
        address : {
            location : "chennai",
            pin : 600028,
            village : "avadi"
        } 
    }
        
]

const [{name, age}, second] = arrofobj

//console.log(name, age, second)

