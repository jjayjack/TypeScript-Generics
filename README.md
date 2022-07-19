# TypeScript-Generics

## About

Built in ways to define your data which allows for further manipulation on data. Type validation that allows you to maintain code will work as expected
`const names: Array<string> = ["Chris","Jen"]`

### Generic Functions

`function merge<T, U>(objA: T, objB: U){return Object.assign(objA, objB)`
`objA` & `objB` can be of different type datas and the return will be the intersection of data inputs. These are dyamically set when function is called
