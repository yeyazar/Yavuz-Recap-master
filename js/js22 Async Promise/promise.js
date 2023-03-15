function testCallback(callback) {
  setTimeout(() => {
    callback("hey buradayim");
  }, 1000);
}

function testPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hey buradayim");
    }, 1500);
  });
}

console.log("ilk konsol");
// testCallback((message) => {
//   console.log(message);
// });
testPromise().then((message) => {
  console.log("Mesaj geldi", message);
});

console.log("son konsol");
