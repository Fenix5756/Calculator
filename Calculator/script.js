const display = document.getElementById("display")
const buttons = document.querySelectorAll(".calculator button")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")

let currentInput = ""
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent.trim()
        if (!value) return;
        if (value === "=") {
            try {
            display.value = eval(currentInput);
            currentInput = display.value;
        } catch{
            display.value = "Error"
            currentInput = ""
        }}  else if (value === "C"){
            currentInput = ""
            display.value = ""
        } else {
            currentInput += value
            display.value = currentInput
        }

})
})
 