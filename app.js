
let adviceText = document.getElementById("advice")
let  adviceNum = document.getElementById("advice-num")
adviceNum.classList.add("advice-num");

function advice(){
    fetch("https://api.adviceslip.com/advice")
            .then(res=> res.json())
            .then(res => {
                adviceText.textContent = `“${res.slip.advice}”`
                adviceNum.textContent =`ADVICE #${res.slip.id}`
            })
}


