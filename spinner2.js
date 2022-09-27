


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