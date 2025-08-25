const img = document.querySelector("img")
const text = document.querySelector("h3")
const mode = document.querySelector(".theme")
const inp = document.querySelector("main  .inputs input")
const btn = document.querySelector(".inputs button")
let surahName = document.querySelector(".name h1")
let no = document.querySelector("#no")
let mean = document.querySelector("#meaning")
const crsr = document.querySelector("#cursor")
const arabic = document.querySelector(".arabic")
const eng = document.querySelector(".english")

var isDark = false

btn.addEventListener("click", () => {
     let surahNo = parseInt(inp.value);

     if (surahNo <= 0 || surahNo >= 115) {
          inp.style.border = "2px solid red"

          eng.innerHTML = "Enter Valid Surah number [1 ~ 114]"
          arabic.innerHTML = "أدخل رقم السورة الصحيح [1 ~ 114]"
     }

     GetSurah(surahNo, "en.asad")
     GetSurah(surahNo, "quran-uthmani")
})

mode.addEventListener("click", () => {
     if (!isDark) {
          document.documentElement.style.setProperty("--bg", "black");
          document.documentElement.style.setProperty("--clr", "white");
          isDark = true
          mode.innerHTML = "<i class='fa-solid fa-sun'></i> <a>Light</a>"
     } else {
          document.documentElement.style.setProperty("--clr", "black");
          document.documentElement.style.setProperty("--bg", "white");
          isDark = false
          mode.innerHTML = "<i class='fa-solid fa-moon' style='color: #ffffff;'></i> <a>Dark</a>"
     }
})

// Arabic Version = "http://api.alquran.cloud/v1/surah/number/quran-uthmani"
const BaseURL = "http://api.alquran.cloud/v1/surah/"

async function GetSurah(surahNo, edition) {

     document.querySelector(".loader").style.display = "flex";

     let prom = await fetch(`${BaseURL}${surahNo}/${edition}`)
     let info = await prom.json()

     setTimeout(() => {
          document.querySelector(".loader").style.display = "none";
     }, 300)
     console.log(info);

     let ayahs = info.data.ayahs

     surahName.innerHTML = info.data.englishName
     no.innerHTML = `Total ayahs : ${info.data.numberOfAyahs}`
     mean.innerHTML = `Meaning : ${info.data.englishNameTranslation}`


     //Adding ayahs to english and arabic
     if (ayahs.length > 0) {

          if (edition == "quran-uthmani") arabic.innerHTML = "";
          else eng.innerHTML = "";

          for (line of ayahs) {
               let p = document.createElement("p")
               p.innerText = line.text
               console.log(p);
               if (edition == "quran-uthmani") {
                    arabic.appendChild(p)
               }
               else {
                    eng.appendChild(p);
               }

          }
     }
}


