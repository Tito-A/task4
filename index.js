const convertFahrToCelsius = (parameter) => {
    if ((Number(parameter) === 0 || Number(parameter)) && !(Array.isArray(parameter)) && (parameter !== "")) {
        let C = (parameter - 32) * 5 / 9
        C = C.toFixed(4)
        return (C)
    } else if (Array.isArray(parameter)) {
        return `${JSON.stringify(parameter)} is not a valid number but an array`
    } else {
            return `${JSON.stringify(parameter)} is not a valid number but a/an ${typeof(parameter)}`
    }
}

console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))



const checkYuGiOh = (n) => {
    if ((Number.isInteger(n)) || ((Number(n))) && !(Array.isArray(n))) {
        let array = [];
        for (var i = 1; i <= n; i++) {
            if (i % 30 == 0) {
                array.push("yu-gi-oh")
            } else if (i % 15 == 0) {
                array.push("gi-oh")
            } else if (i % 10 == 0) {
                array.push("yu-oh")
            } else if (i % 6 == 0) {
                array.push("yu-gi")
            } else if (i % 5 == 0) {
                array.push("oh")
            } else if (i % 3 == 0) {
                array.push("gi")
            } else if (i % 2 == 0) {
                array.push("yu")
            } else {
                array.push(i)
            }
        }
        return (array)
    } else {
        return `invalid parameter:${JSON.stringify(n)}`
    }
}


console.log(checkYuGiOh("fizzbuzz is meh"))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh(10))
console.log(checkYuGiOh([1, 2, 3]))
console.log(checkYuGiOh({temp: 0}))
