// let exp =  '5 1 2 + 4 * + 3 -'.split(" ")

class Calculator {
  constructor () {
  }

  calculate (exp) {
    if (exp === "" | exp === " ") return []

    exp = this.parsing(exp)

    let calc = {
      "+" : (a, b) => a + b,
      "-" : (a, b) => a - b,
      "*" : (a, b) => a * b,
      "/" : (a, b) => a / b
    }
  
    let stack = []
  
    exp.forEach(op => {
      stack.push ( 
        calc[op] 
          ? calc[op](...stack.splice(-2))
          : op
        )
    });
  
    return stack
  }

  parsing (exp) {
    exp = exp.split(" ")
    exp = exp.map(i =>  {return Number(i) ? Number(i) : i})
    return exp
  }
}

module.exports = Calculator

// map return array of numbers & symbols

// wrong char ratio

// test("mon test") {
//   const testArray = ['5', '1', '2', '+' '-']

//   expect(calculate(testArray)).toBe('4')
// }

// ['5', '1', '2', '+', '4', '*', '+', '3', '-']

// [5, 1, 2, '+', 4, '*', '+', 3, '-']


// ['5', '1', '2', '+']

// expect error

// ['5', '1', '2', '+' '-']

// expect result toBe(4)

// n numbers && n-1 symbols

// [1] expect 1
// [2]
// [n]

// *
// +
// -
// /

// resultats

// parsing
