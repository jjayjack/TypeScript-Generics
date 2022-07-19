/*const names: Array<string> = ["Jen", "Chris"]; //same as string[]
// names[0].split(" ");
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed!");
  }, 2000);
});
*/
// Generic Function
function merge<T, U>(objA: T, objB: U) {
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
