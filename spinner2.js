



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ')
// }, 900);



const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let delay = 100

for (const char of spinnerArr) {
  setTimeout(() => {
process.stdout.write(char)
  },delay += 300)
}

setTimeout(() => {
  console.log("")
}, delay)