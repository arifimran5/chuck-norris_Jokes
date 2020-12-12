const paragraph = document.getElementById("para");
const btn = document.querySelector(".btn");


const forJoke = btn.addEventListener("click", () => {
   fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         // console.log("Data is: " ,data)
         var joke = data.value;
         // console.log("joke is; ", joke);
         paragraph.innerHTML = joke;
         
      })
      .catch();
});
