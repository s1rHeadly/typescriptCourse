# TypeScript Course Notes

This repository contains my course notes and practice code from the [Learn TypeScript Course](https://squiz.udemy.com/course/learn-typescript/) by Colt Steele.

## 📚 Course Structure

### Section 2: TypeScript Basics
**Location:** `course/section2/`

- Basic type annotations (`string`, `number`, `boolean`)
- Array types and union arrays
- The `any` type (and why to avoid it)
- Arrays of objects with inline type definitions

**Key Concepts:**
- Type annotations: `let variable: type = value`
- Union types in arrays: `(string | number)[]`
- Type inference and explicit typing

---

### Section 4: Functions
**Location:** `course/section4/`

- Function parameter types and return types
- Functions with object parameters
- Default parameter values
- Arrow functions with types
- Rest parameters (`...rest`)
- Contextual typing
- `void` type for functions that don't return values

**Key Concepts:**
- Function syntax: `function name(param: type): returnType { }`
- Default values: `function greet(name: string = "stranger")`
- Rest parameters: `function add(...rest: number[]): number`

---

### Section 5: Objects
**Location:** `course/Section5/`

- Typing object properties
- Optional properties
- Readonly properties
- Object methods with types

---

### Section 6: Arrays
**Location:** `course/section6/`

- Array type annotations
- Typed array methods
- Array exercises and practice

---

### Section 7: Union Types
**Location:** `course/section7/`

- Union type syntax: `string | number`
- Working with union types
- Type narrowing with union types

---

### Section 8: Enums & Tuples
**Location:** `course/section8/`

**Enums:**
- Defining named constants with `enum`
- Numeric and string enums
- Using enums in functions and switch statements

**Tuples:**
- Fixed-length arrays with specific types: `[string, number]`
- Tuple type annotations

---

### Section 9: Interfaces
**Location:** `course/section9/`

- Interface syntax and usage
- Optional properties (`?`)
- Readonly properties
- Interface methods
- Methods with parameters
- Reopening interfaces (declaration merging)
- Extending interfaces (inheritance)

**Key Concepts:**
- Use interfaces for object structures
- Interfaces can be reopened and extended
- `readonly` prevents property reassignment
- Optional properties use `?` syntax

---

### Section 10: Type Guards & Type Narrowing
**Location:** `course/section10/`

- Type guards with `typeof`
- Type narrowing with conditional statements
- `in` operator for type narrowing
- Type narrowing with objects

---

### Section 11: Mini Project
**Location:** `course/section11-mini-project/`

A practical project applying TypeScript concepts learned so far, including:
- Multiple source files
- Utility modules
- TypeScript compilation setup

---

### Section 13: Classes
**Location:** `course/section13/`

- Class syntax with TypeScript
- Access modifiers:
  - `public` (default)
  - `private`
  - `protected`
  - `readonly`
- Class constructors
- Getters and setters
- Class inheritance with `extends`
- Using `super()` in subclasses
- Protected members

**Key Concepts:**
- `protected` allows access in class and subclasses
- `private` restricts access to the class only
- `readonly` prevents reassignment after initialization

---

### Section 14: Advanced Types
**Location:** `course/section14/`

**Generics:**
- Generic type syntax: `Array<number>` vs `number[]`
- Generic functions: `function identity<T>(arg: T): T`
- Using generics with DOM elements: `document.querySelector<HTMLInputElement>('#id')`
- Event types: `MouseEvent`, etc.

**Merging Types:**
- Type intersections with `&`
- Interface extensions
- Utility types: `Omit<T, K>`
- Extracting property types: `Type['property']`
- `as const` for immutability

**React with TypeScript:**
- Basic React component typing with `.tsx` files

---

### Section 15: Type Narrowing (Advanced)
**Location:** `course/section15/`

**Type Narrowing Techniques:**
- Type narrowing with `if` statements and `typeof`
- Type narrowing with truthy checks
- Type narrowing between object interfaces using `in` operator
- Type narrowing with `instanceof`
- Type predicates: `function isCat(animal: Cat | Dog): animal is Cat`
- Discriminated unions with `kind` property
- Switch statements for exhaustive type checking

**Key Concepts:**
- Type predicates return `value is Type` to help TypeScript narrow types
- Discriminated unions use a common property (like `kind`) to distinguish between types
- Exhaustive checking ensures all union members are handled

---

## 📝 Tips & Cheatsheets
**Location:** `course/tips/`

### Cheatsheet (`cheetsheet.ts`)
Comprehensive reference covering:
- Basics (types, arrays, objects)
- Functions
- Type aliases
- Interfaces
- Classes
- Generics
- Utility types

### Interface vs Type (`interfaceVtype.ts`)
- When to use interfaces vs type aliases
- Differences in capabilities
- Best practices

### Tips for Writing TypeScript (`tipsForWritingTs.ts`)
- Best practices and common patterns
- TypeScript development tips

---

## 🛠️ Project Setup

### Basic TypeScript Project
**Location:** `basic-ts-project-setup/`

A basic TypeScript project setup example with:
- `tsconfig.json` configuration
- HTML integration
- TypeScript compilation
- Module system

### Configuration
Each section may have its own `tsconfig.json` with specific compiler options. The root `tsconfig.json` provides base configuration.

---

## 📦 Dependencies

- **TypeScript**: ^5.9.2
- **lite-server**: ^2.6.1 (for local development)

---

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Navigate to a specific section:
```bash
cd course/section15
```

3. Compile TypeScript:
```bash
tsc
```

4. Run with lite-server (if configured):
```bash
npm start
```

---

## 📖 Learning Path

The course follows this progression:
1. **Basics** → Understanding types and annotations
2. **Functions** → Typing functions and parameters
3. **Objects & Arrays** → Complex data structures
4. **Unions & Enums** → Advanced type definitions
5. **Interfaces** → Object structure definitions
6. **Type Guards** → Runtime type checking
7. **Classes** → Object-oriented TypeScript
8. **Generics** → Reusable type definitions
9. **Type Narrowing** → Advanced type safety

---

## 💡 Key Takeaways

- **Type Safety**: TypeScript catches errors at compile time
- **Interfaces vs Types**: Use interfaces for objects, types for unions/primitives
- **Type Narrowing**: Essential for working with union types safely
- **Generics**: Enable reusable, type-safe code
- **Access Modifiers**: Control visibility in classes (`public`, `private`, `protected`)
- **Type Predicates**: Help TypeScript understand type narrowing in custom functions

---

## 📚 Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- Course: [Learn TypeScript - Udemy](https://squiz.udemy.com/course/learn-typescript/)

---

## 📝 Notes

- All code examples include both TypeScript source files (`.ts`) and compiled JavaScript (`.js`) where applicable
- Each section builds upon previous concepts
- Practice exercises are included in several sections
- The `dist/` folders contain compiled JavaScript output

---

*Last updated: Based on course completion notes*

