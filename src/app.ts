const names: Array<string> = ["Jen", "Chris"]; //same as string[]
// names[0].split(" ");
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed!");
  }, 2000);
});
