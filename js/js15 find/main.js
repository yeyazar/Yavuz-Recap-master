const users = [
    { id: 0, name: "ahmet", age: 25 },
    { id: 1, name: "mehmet", age: 26 },
    { id: 3, name: "dervis", age: 26 },
  ];
  
  const kirktanKucukler = [];
  
  const test = users.find((asd, index, array) => {
    if (asd.age == 26) {
      return true;
    }
  });
  
  console.log(test);
  
  // users.forEach((asd, index, array) => {
  //   if (asd.age < 30) {
  //     kirktanKucukler.push(asd.name);
  //   } else {
  //     console.log(asd.name);
  //   }
  // });
  