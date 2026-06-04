let btn = document.querySelector("button");

// btn.onclick = function(){
//     console.log("The button is clicked");
// }

btn.addEventListener("click", () => {
  console.log("Hello");
});

btn.addEventListener("click", () => {
  console.log("Firasath");
});

btn.addEventListener("dblclick", () => {
  console.log("Hey You , why did you double clicked me ?");
});
