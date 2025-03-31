function calculateResult() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result = 0;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Kérlek, adj meg két számot!");
        return;
    }
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("A 0-val való osztás nem megengedett!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Ismeretlen művelet!");
            return;
    }
    document.getElementById('result').value = result;
}