async function greet() {
  // throw "Random error";

  return "Hello world!!";
}

greet()
  .then((result) => {
    console.log("Promise is resolved : ", result);
  })
  .catch((error) => {
    console.log("We got an error : ", error);
  });

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
}
