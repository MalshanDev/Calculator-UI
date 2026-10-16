let result = document.getElementById("result");
let history = document.getElementById("history");

function press(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = "";
    history.innerHTML = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    let expression = result.value;

    if (expression == "") {
        return;
    }

    if (expression.includes("/0")) {
        result.value = "Error";
        history.innerHTML = "Division by zero is not allowed";
        return;
    }

    try {
        let answer = eval(expression);
        history.innerHTML = expression;
        result.value = answer;
    }

    catch {
        result.value = "Error";
        history.innerHTML = "Invalid expression";
    }
}

let theme = document.getElementById("theme");

theme.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});
