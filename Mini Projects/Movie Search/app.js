const inp = document.querySelector("#search");
const srbtn = document.querySelector("#srbtn");
const cards = document.querySelector(".cards");
const menu = document.querySelector(".menu")
const aside = document.querySelector("aside")
const close = document.querySelector("aside i")



srbtn.addEventListener("click", () => {
     document.body.className = "load-it";
     let val = encodeURI(inp.val)
     let NewURL = `http://www.omdbapi.com/?s=${inp.value}&apikey=d36371c9`;
     GetMovies(NewURL);
});

async function GetMovies(NewURL) {
     try {
          cards.innerHTML = "";
          let Data = [], names = [], images = [], years = [];

          let response = await fetch(NewURL);
          let data = await response.json();

          Data = data.Search;
          console.log(Data);

          if (!Data) {
               cards.innerHTML = "<p>No results found.</p>";
               return;
          }

          for (let i of Data) {
               names.push(i.Title);
               images.push(i.Poster);
               years.push(i.Year);
          }

          for (let i = 0; i < names.length; i++) {
               MakeCards(names[i], images[i], years[i]);
          }
     }
     catch (err) {
          console.log("Error:", err);
          cards.innerHTML = "<p>Something went wrong!</p>";
     }
     finally {
          document.body.className = "";
     }
}

function MakeCards(name, imgURl, year) {
     let card = document.createElement("div");
     card.className = "card";
     let img = "";

     if (!imgURl || imgURl == "N/A") {
          img = `<b>N / A</b>`
     }

     card.innerHTML = `
        <div class="poster">${img}</div>
        <h2>${name}</h2>
        <p>${year}</p>
    `;

     let poster = card.querySelector(".poster");
     poster.style.backgroundImage = `url(${imgURl})`;
     poster.style.backgroundSize = "cover";
     poster.style.backgroundPosition = "center";

     cards.appendChild(card);
}


let h;

window.addEventListener("resize", () => {
     h = getComputedStyle(document.body).width;
     console.log(h);
     if (parseInt(h) <= 700) menu.style.display = "block"

})

h = parseInt(h)



menu.addEventListener("click", (e) => {
     menu.style.display = "none"
     aside.style.display = "flex"

})


close.addEventListener("click", (e) => {
     menu.style.display = "block"
     aside.style.display = "none"

})




