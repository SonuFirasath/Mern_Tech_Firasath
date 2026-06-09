let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error --> ",err);
// });

// -----------> using async and await

// async function getFact(){
//     try{

//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch(err){
//         console.log("Error ---> ",err);
//     }

//     console.log("Bye");
// }

// getFact();

// --------> Using axios

let div = document.querySelector(".container-fluid");

let btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  let fact = await getFact();
  console.log(fact);
  let p = document.createElement("p");
  p.innerText = fact;
  p.style.border = "2px solid black";
  div.append(p);
});

async function getFact() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
    console.log(res.data.fact);
  } catch (err) {
    console.log("Error --> ", err);
  }
}
