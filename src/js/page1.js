// window.onload = function () {
let btn = document.getElementById("submit");
btn.addEventListener("click", function (e) {
    let num1Str = document.getElementById("num1").value;
    let num2Str = document.getElementById("num2").value;
    let res = document.getElementById("res").value;
    let operator = document.getElementById("operator");
    let op = operator.options[operator.selectedIndex].text;
    let error = document.getElementById("error");
    error.innerText = "";
    error.style.color = "red";
    res.value = "";

    if (!isNumeric(num1Str)) {
        error.innerText = "Некорректный ввод поля 1";
    } else if (!isNumeric(num2Str) && op != "sqrt") {
        error.innerText = "Некорректный ввод поля 2";
    } else {
        let num1 = parseFloat(num1Str);
        let num2 = parseFloat(num2Str);
        let result;

        if (op == "sum") {
            result = num1 + num2;
        } else if (op == "sub") {
            result = num1 - num2;
        } else if (op == "div") {
            if (num2 == 0) {
                error.innerText = "Деление на 0";
            } else {
                result = num1 / num2;
            }
        } else if (op == "mul") {
            result = num1 * num2;
        } else if (op == "pow") {
            result = Math.pow(num1, num2);
        } else if (op == "sqrt") {
            if (num1 <= 0) {
                error.innerText = "Число 1 должно быть больше 0";
            } else {
                result = Math.sqrt(num1);
            }
        }
        if (result != undefined) {
            if (result != res) {
                error.innerText = "Правильный результат: " + result;
            } else {
                error.style.color = "green";
                error.innerText = "Результат правильный!";
            }
        }
    }
});
// };

function isNumeric(str) {
    if (typeof str != "string") {
        return false;
    }

    return !isNaN(str) && !isNaN(parseFloat(str));
}
