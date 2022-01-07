const obj = {
    name: "sakthi",
    age: "23",
    address : {
        city: "tirupattur",
        state: "TN"
    }
}
const anotherObj = {
    education: "BE",
    interest: "Programming",
    ...obj
}

//console.log(anotherObj)

//const { name, age, ...restvalues } = obj

const arr = ['china', 'india', 'US']

arr.push("rohit")

const anotherobj = {...arr}

console.log(anotherobj)

//const [two, five, ...restArray] = arr

//console.log(two)
//console.log(restArray)