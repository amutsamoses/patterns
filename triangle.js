let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "*";
  console.log(str.repeat(i));
}
//

for (let i = 1; i <= n; i++) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - i) + str.repeat(i));
}

console.log("\n");
for (let i = n; i >= 1; i--) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - i) + str.repeat(i));
}

for (let i = n; i >= 1; i--) {
  let str = "*";
  console.log(str.repeat(i));
}

console.log("\n");
let h = 7;
console.log("*".repeat(h));
for (let i = 1; i <= h; i++) {
  console.log("*");
}

console.log("*".repeat(h));
for (let i = 1; i <= h; i++) {
  console.log("  " + "*");
}

console.log("\n");
for (let i = 1; i <= n; i++) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}

for (let i = n; i >= 1; i--) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}

console.log("\n");
for (let i = 1; i <= n; i++) {
  let str = "*";
  console.log(str.repeat(i));
}

let y = 6;
console.log("*".repeat(y));

for (let i = n; i >= 1; i--) {
  let str = "*";
  console.log(str.repeat(i));
}

console.log("\n");

for (let i = 1; i <= n; i++) {
  let str = "*";
  let space = " ";
  console.log(" " + space.repeat(n - i) + str.repeat(i));
}
console.log("*".repeat(y));

for (let i = n; i >= 1; i--) {
  let str = "*";
  let space = " ";
  console.log(" " + space.repeat(n - i) + str.repeat(i));
}

console.log("*".repeat(h));
for (let i = 1; i < h; i++) {
  console.log("*");
}
//
