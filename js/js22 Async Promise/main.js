function getUser(callback) {
  setTimeout(() => {
    callback({ username: "mehmet" });
  }, 2000);
}

function getUserAdresses(username, callback) {
  setTimeout(() => {
    callback(["ankara", "mugla", "eskisehir"]);
  }, 1000);
}

function getRestaurants(addresses, callback) {
  setTimeout(() => {
    callback(["A restaurant", "B restaurant", "C restaurant"]);
  }, 1000);
}

getUser((user) => {
  getUserAdresses(user.username, (addresses) => {
    getRestaurants(addresses, (openRestaurants) => {
      document.body.append("Acik restorantlar :", openRestaurants.toString());
    });
    console.log(addresses);
  });
});

console.log("ikinci consol");
