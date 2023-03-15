function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: "mehmet" });
    }, 2000);
  });
}

function getUserAdresses(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["ankara", "mugla", "eskisehir"]);
    }, 1000);
  });
}

function getRestaurants(addresses) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["A restaurant", "B restaurant", "C restaurant"]);
    }, 1000);
  });
}

getUser()
  .then((user) => getUserAdresses(user.username))
  .then((addresses) => getRestaurants(addresses))
  .then((openRestaurants) =>
    document.body.append("Acik restorantlar :", openRestaurants.toString())
  )
  .catch((error) => {
    console.log(error);
  });

console.log("ikinci consol");
