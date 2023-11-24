const time = document.querySelector(".time")
const result = document.querySelector(".result")
const inputNumber = document.querySelector(".number")
const type = document.querySelector(".type")
const convertBtn = document.querySelector(".btn")
let degree = ''

//function to get time
function displayTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    let session = ''
    if(hours >= 12) {
        session = "PM"
    } else {
        session = "AM"
    }
    time.innerHTML = `${hours}.${minutes} ${session}`
}
setInterval(displayTime, 10)

//function convert
convertBtn.addEventListener("click", () => {
    convert()
    convertBtn.innerHTML = `<i class="fa-solid fa-spinner"></i>   converting ...`
    setTimeout(()=> {
        convertBtn.innerHTML = `Convert`
    },1000)
}) 

// if(inputNumber.value === '') {
//     convertBtn.setAttribute("disabled", "")
// } 

// setTimeout(() => {
//     convertBtn.removeAttribute("disabled")
// }, 5000)




function convert() {
    setTimeout(() => {
        let value = inputNumber.value
        if(value !== '') {
            if(type.value === 'Fahrenheit') {
                degree = (value - 32) / 1.8
                result.innerHTML = `${degree.toFixed(2)} &deg;c`
            } else {
                degree = value - 273.15
                result.innerHTML = `${degree.toFixed(2)} &deg;c`
            }
        }
    },1200)
}
