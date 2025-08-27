let BASEURL = "https://opentdb.com/api.php?amount=15&type=multiple"
const st = document.querySelector("#st")
const submit = document.querySelector("#submit")
let img = document.querySelector("img")
const ql = document.querySelector(".container")



st.addEventListener("click" , () => {
     ql.style.display = 'flex';
     st.style.display = 'none';
     submit.style.display = 'block'

})

const questionlist = document.querySelector(".container")
const score = document.querySelector("#scr")
const loader = document.querySelector(".loader")

let val = 0;
let arr, Qs, CrctAns, WrgAns, options;
let Data;
async function GetQuiz() {
     try {
          let response = await fetch(BASEURL)
          let data = await response.json()
          arr = data.results;
          Data = arr
          console.log(Data);

          Qs = Data.map(element => { return element.question });
          CrctAns = Data.map(element => { return element.correct_answer })

          WrgAns = [[]]
          WrgAns = Data.map(element => { return element.incorrect_answers })

          options = [[]]
          options = WrgAns.map((e) => { return e })

          for (let i = 0; i < options.length; i++) {
               options[i].push(CrctAns[i])
               shuffle(options[i])
          }

          GenerateQs(Qs, options)
     }
     catch (er) {
          console.error("Error fetching quiz:", err);
     }
     finally {
          loader.style.display = "none"
     }
}


function GenerateQs(Qs, options) {
     Qs.forEach(E => {
          let Q = document.createElement("div")
          Q.innerHTML = `  <p>${Qs.indexOf(E) + 1}] ${E}</p>
               <ul>
                    <li>a] ${options[Qs.indexOf(E)][0]}</li>
                    <li>b] ${options[Qs.indexOf(E)][1]} <li>
                    <li>c] ${options[Qs.indexOf(E)][2]} </li>
                    <li>d] ${options[Qs.indexOf(E)][3]}</li>
               </ul>`
          Q.className = "questions"
          questionlist.appendChild(Q)

          Q.addEventListener("click", (e) => {
               let opt = Q.querySelectorAll("li")
               let choosed = e.target.innerText
               Q.remove()
               UpdateScore(Qs.indexOf(E), choosed.slice(3, choosed.length))
          })
     })
}


function UpdateScore(Q_no, ans) {
     console.log( 'Your Answer : ' + ans);
     console.log( 'Correct Answer : ' +  Data[Q_no].correct_answer);

     if (Data[Q_no].correct_answer == ans) {
          console.log('correct');
          val++;
          score.innerText = `Score : ${val}`

     }
     else console.log("wrong");

     if(document.querySelectorAll(".questions").length == 0){
          NewGame()
     }
}


st.addEventListener("click", () => {
     loader.style.display = "flex"
     img.style.top = "10px"
     GetQuiz();
})


function shuffle(array) {
     let currentIndex = array.length;
     
     while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          
          [array[currentIndex], array[randomIndex]] = [
               array[randomIndex], array[currentIndex]];
     }
}

function NewGame(){
     st.style.display = "block"
     score.innerText = "Score : 0"
     st.style.top = "227px"
     img.style.top = "210px" 
}
