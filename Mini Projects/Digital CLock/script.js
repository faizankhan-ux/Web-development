const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const sec = document.querySelector(".sec")
const AMPM = document.querySelector(".AMPM")
 
function updateClock() {
     let now = new Date()
     sec.innerHTML = formaTime(now.getSeconds())
     minute.innerHTML = formaTime(now.getMinutes())

     let hr = now.getHours()

     if (hr > 12) {
          hr -= 12
          AMPM.innerHTML = "PM"
     } else AMPM.innerHTML = "AM"

     hour.innerHTML = formaTime(hr)
}

function formaTime(num){
     return num < 10 ? "0" + num : num
}

updateClock()

setInterval(updateClock, 1000)
