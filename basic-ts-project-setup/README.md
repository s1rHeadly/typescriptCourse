# 🚀 TypeScript Practice with JavaScript Modules

This folder contains a complete reference setup for practicing TypeScript with JavaScript modules.

## 📁 File Structure

```
reference/
├── index.html                 # Main HTML file with interactive examples
├── js-modules/
│   ├── main.js               # Main JavaScript file that imports modules
│   ├── stringUtils.js        # String utility functions
│   └── mathUtils.js          # Math utility functions
├── typescript-example.ts     # Example TypeScript file showing proper typing
└── README.md                 # This file
```

## 🎯 How to Use

### 1. **Open the HTML File**
```bash
# Navigate to the reference folder
cd reference

# Open index.html in your browser
open index.html
```

### 2. **Test JavaScript Modules**
- Click the buttons in the HTML file to test the JavaScript functions
- Open browser console to see the results
- All functions are available globally for testing

### 3. **Practice TypeScript**
- Create new `.ts` files in this folder
- Import the JavaScript functions with proper TypeScript types
- Use the `typescript-example.ts` as a reference

## 📚 Available Functions

### String Utilities (`stringUtils.js`)
- `toUpperCase(str)` - Convert to uppercase
- `toLowerCase(str)` - Convert to lowercase  
- `capitalize(str)` - Capitalize first letter
- `reverseString(str)` - Reverse a string
- `countWords(str)` - Count words in string
- `isPalindrome(str)` - Check if palindrome
- `formatString(str, format)` - Format string (default export)

### Math Utilities (`mathUtils.js`)
- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division
- `power(base, exponent)` - Exponentiation
- `factorial(n)` - Factorial
- `sumArray(numbers)` - Sum array elements
- `averageArray(numbers)` - Calculate average
- `findMax(numbers)` - Find maximum value
- `findMin(numbers)` - Find minimum value
- `calculate(operation, a, b)` - Calculator (default export)

## 🔧 TypeScript Practice Examples

### Basic Import with Types
```typescript
import { add, multiply } from './js-modules/mathUtils.js';

function calculateTotal(a: number, b: number): number {
    return add(a, b);
}

const result: number = calculateTotal(5, 3);
console.log(result); // 8
```

### Interface Definition
```typescript
interface StringProcessor {
    processText(text: string): string;
    getWordCount(text: string): number;
}

class MyStringProcessor implements StringProcessor {
    processText(text: string): string {
        return text.toUpperCase();
    }
    
    getWordCount(text: string): number {
        return text.split(' ').length;
    }
}
```

### Generic Functions
```typescript
function processArray<T>(items: T[], processor: (item: T) => T): T[] {
    return items.map(processor);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (n: number) => n * 2);
```

## 🎨 Features

- ✅ **Interactive HTML interface** for testing functions
- ✅ **ES6 modules** with proper import/export
- ✅ **TypeScript examples** with proper typing
- ✅ **Error handling** in math functions
- ✅ **Console logging** for debugging
- ✅ **Responsive design** with modern CSS

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Click the test buttons to see JavaScript functions in action
3. Open browser console to see available functions
4. Create new `.ts` files to practice TypeScript
5. Import JavaScript functions and add proper types
6. Compile TypeScript with `tsc` command

## 💡 Tips

- Use the browser console to test functions interactively
- Start with simple type annotations, then move to interfaces
- Practice with both named and default exports
- Try creating your own TypeScript classes that use the JavaScript functions
- Experiment with generics and advanced TypeScript features

Happy coding! 🎉

