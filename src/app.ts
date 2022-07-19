/*const names: Array<string> = ["Jen", "Chris"]; //same as string[]
// names[0].split(" ");
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed!");
  }, 2000);
});
*/
// Generic Function
/*function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
console.log(merge({ name: "max" }, { age: 25 }));
const mergedObject = merge({ name: "max" }, { age: 25 });
// mergedObject.name; // Cannot target
console.log(mergedObject.age); //Can target with Generic T, U
const mergedObject2 = merge<{ name: string; hobby: string[] }, { age: number }>(
  { name: "Cindy", hobby: ["dancing"] },
  { age: 27 }
);
console.log(mergedObject2);
*/
// Generic Type Constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge(
  { name: "Max", hobbies: ["Sports", "Cars"] },
  { age: 30 }
);
// console.log(mergedObj);

// Generic Function
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Has no value.";
  if (element.length === 1) {
    descriptionText = "Has 1 value.";
  } else if (element.length > 1) {
    descriptionText = "Has " + element.length + " elements.";
  }
  return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
