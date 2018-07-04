const math = {
  sum(...args) {
    return args.reduce((x, y) => x + y, 0)
  },
  subtract(...args) {
    return args.reduce((x, y) => x - y)
  },
  multiply(...args) {
    return args.reduce((x, y) => x * y, 1)
  },
  divide(...args) {
    return args.reduce((x, y) => x / y)
  }
}

export default math
export const sum = math.sum
export const subtract = math.subtract
export const multiply = math.multiply
export const divide = math.divide
