// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// ----> callback hell

// savetoDb(
//   "Mikey",
//   () => {
//     console.log("Success : Your data is saved.");
//     savetoDb(
//       "Firasath",
//       () => {
//         console.log("Success2 : Your data is saved.");
//         savetoDb(
//           "Sonu",
//           () => {
//             console.log("Success3 : Your data is saved.");
//           },
//           () => {
//             console.log(
//               "Failure3 : Weak connection . data cannot be saved....",
//             );
//           },
//         );
//       },
//       () => {
//         console.log("Failure2 : Weak connection . data cannot be saved....");
//       },
//     );
//   },
//   () => {
//     console.log("Failure : Weak connection . data cannot be saved....");
//   },
// );

// ----> Promises

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success : Data is saved to DB.");
    } else {
      reject("Failure : Weak Connection . Data cannot be saved.");
    }
  });
}

savetoDb("mikey")
  .then((result) => {
    console.log("Success 1 : Promise is resolved : ", result);
    return savetoDb("Firasath");
  })
  .then((result) => {
    console.log("Success2 : Promise is resolved : ", result);
    return savetoDb("Sonu");
  })
  .then((result) => {
    console.log("Success 3 : Promise is resolved : ", result);
  })
  .catch((error) => {
    console.log("Failure 1: Promise is rejected : ", error);
  });
