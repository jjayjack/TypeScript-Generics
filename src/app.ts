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
// console.log(countAndDescribe(["Sports", "Cooking"]));

// KeyOf Constraint
function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Max" }, "name");

// Generic Classes - Will only accept a set datatype - lock in a type
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
// Union vs Generic -- same as above BUT as Union - using UNION will be read as this will accept any of these datatypes - flexible for any method type
class UnionDataStorage {
  private data: (string | number | boolean)[] = [];
  addItem(item: string | number | boolean) {
    this.data.push(item);
  }
  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manuel");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
/*
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Max" });
objStorage.addItem({ name: "Travis" });
//
objStorage.removeItem({ name: "Max" });
console.log(objStorage.getItems());
*/

// Built in TypeScript Generic Type: Utility
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
// Sets up Partial
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
// ReadOnly Utility
const names: Readonly<string[]> = ["Max", "Sarah"];
// names.push("Manuel");
