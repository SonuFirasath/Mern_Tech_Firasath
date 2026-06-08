let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 3000);

// function changeColor(color,delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("orange",3000);
// changeColor("hotpink",4000);

// ----> Callbacks

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//        if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("yellow",1000)
//             });
//         })
//     })
// });

// ------> using promises to solve the issue of callback hell

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        h1.style.color = color;
      resolve("Color changed!");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("Red color is completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("Green color is completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("Orange color is Completed");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("Yellow color is completed");
    return changeColor("hotpink", 1000);
  })
  .then(()=>{
    console.log("Hot Pink color is completed");
  })
  .catch((error) => {
    console.log("Error occurred : ", error);
  });
