const binInput = document.getElementById("bin-number");
const errorSpan = document.getElementById("error-message");
const convertButton = document.getElementById("btn-convert");
const resultText = document.getElementById("result");

binInput.addEventListener("focus", function(){
    resultText.innerHTML = "";
})

binInput.addEventListener("input", function(event){
    const value = event.target.value;

    if(value.match(/[^01]/) && value != "") {
        errorSpan.classList.add("active");
        convertButton.disabled = true;
    } else {
        errorSpan.classList.remove("active");
        convertButton.disabled = value == "";
    }
})

convertButton.addEventListener("click", () => {
    const bin = binInput.value;
    const dec = bin2Dec(bin);

    console.log(bin, " => ", dec);

    const res = bin + "<sub>(2)</sub>" + " = " + dec + "<sub>(10)</sub>";

    resultText.classList.add("active");
    resultText.innerHTML = res;
    binInput.value = "";
    convertButton.disabled = true;
})

function bin2Dec(bin) {
    const length = bin.length;

    let value = 0;
    for(let i = 0; i < length; i++) {
        value += bin[length - i - 1] * (2 ** i);
    }

    return value;
}