// Union Types

/*
Union types in TypeScript allow a variable to be one of several types.
You define a union type using the pipe (|) operator between the types.

Syntax: type1 | type2 | type3
*/

// Basic Union Types
let id: string | number;
id = "123";     // Valid - string
id = 456;       // Valid - number
// id = true;   // Invalid - boolean not in union

// Union with multiple types
let value: string | number | boolean;
value = "hello";
value = 42;
value = true;

// Function parameters with union types
function printId(id: string | number) {
    console.log(`ID: ${id}`);
}

printId("abc123");
printId(789);

// Type narrowing with union types
function processValue(value: string | number) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        console.log(value.toUpperCase());
    } else {
        // TypeScript knows value is number here
        console.log(value.toFixed(2));
    }
}

// Union types with arrays
let items: (string | number)[] = ["apple", 42, "banana", 100];

// Union types with objects
type Status = "loading" | "success" | "error";

interface ApiResponse {
    status: Status;
    data?: any;
    error?: string;
}

// Using the union type
let response: ApiResponse = {
    status: "loading"
};

// Literal union types
type Direction = "up" | "down" | "left" | "right";
let direction: Direction = "up";

// Union types with null and undefined
let nullableString: string | null = null;
let optionalNumber: number | undefined = undefined;

// Union types in function return values
function getValue(): string | null {
    return Math.random() > 0.5 ? "success" : null;
}

// Discriminated unions (tagged unions)
type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number }
    | { kind: "triangle"; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
    }
}

// Example usage
const circle: Shape = { kind: "circle", radius: 5 };
const rectangle: Shape = { kind: "rectangle", width: 10, height: 8 };

console.log(calculateArea(circle));     // 78.54...
console.log(calculateArea(rectangle));  // 80

/*
Key Points about Union Types:

1. Flexibility: Allow variables to hold values of multiple types
2. Type Safety: TypeScript ensures you only use methods available on all types
3. Type Narrowing: Use type guards (typeof, instanceof) to narrow types
4. Discriminated Unions: Use a common property to distinguish between union members
5. Null Safety: Common pattern for handling nullable values
6. Literal Types: Can combine with literal types for precise control

Best Practices:
- Use descriptive names for union types
- Prefer discriminated unions for complex scenarios
- Use type guards for safe type narrowing
- Consider using optional properties instead of null unions when appropriate
*/
