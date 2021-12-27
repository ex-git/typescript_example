### To run the index.ts file

`npm install -g typescript ts-node`

```
ts-node index.ts

```
or

```
tsc index.ts
node index.js
```

**Type:** an easy way to refer to the different properties + functions that a value has

1. helps us catch errors during development
2. uses 'type annotations' to analyze our code
3. only active during development
4. doesn't provide any performance optimization



**it is like a friend sitting behind you while you are coding. It won't affect browser or Node on the code execution**



## ***Type annotations***  <==> **Type inference**

**Type annotations**: developers tell Typescript the type

**Type inference**: Typescript guesses the type
 `const color = "red"` If declaration and initialization are on the same line, Typescript will gigure out the type of 'color' for us.

```
// Typescript will guess color as "any" if declaration and initialization not on the same linr.
let color;
color = "red"
```

**Type annotation for functions** => We can add code to tell Typescript what type of arguments a function will receive and what type of values it will return

**Type inference for function** => Typescript tires to figure out what type of value a function will return