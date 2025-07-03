// Rama prueba

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero";
      }
    default:
      return "Error: Invalid operator";
  }
}

// Example usage:
console.log(calculator(10, 2, '+'));  // Output: 12
console.log(calculator(10, 2, '-'));  // Output: 8
console.log(calculator(10, 2, '*'));  // Output: 20
console.log(calculator(10, 2, '/'));  // Output: 5
console.log(calculator(10, 0, '/'));  // Output: Error: Division by zero
console.log(calculator(10, 2, '%'));  // Output: Error: Invalid operator