function c() { 
    document.getElementById('display').value = 0
    document.getElementById('display-conta').value = ''

    const virgula = document.getElementById(".");
    virgula.disabled = false;
}

function ce() {
    document.getElementById('display-conta').value = '' 

    const virgula = document.getElementById(".");
    virgula.disabled = false;
}

function removeLast() {
    let num = document.getElementById('display').value 
    document.getElementById('display').value = num.slice(0,-1)
}

function maisMenos() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = display * (-1)
}

function buttonPress(id) {
    
    const valorButton = document.getElementById(id).id
    const valorDisplay = document.getElementById('display').value 
    const displayConta = document.getElementById('display-conta').value 

    if(displayConta.charAt(displayConta.length-3) == '=') { // Quando se aperta um número novo, reseta os displays

        document.getElementById('display').value = valorButton
        document.getElementById('display-conta').value = ''


    } else if(valorDisplay == 0 && valorButton == 0) { // Checa se não há nada nos 2 display
        
        const novoValorDisplay = `0`
        document.getElementById('display').value = novoValorDisplay 

    } else if(valorDisplay == 0 && valorButton == '.') { // Checa se o primeiro número digitado é um decimal (ex: 0.5)
        
        const virgula = document.getElementById(".");
        virgula.disabled = true;

        const novoValorDisplay = valorDisplay + valorButton
        document.getElementById('display').value = novoValorDisplay

    } else if(valorDisplay == '0') { // Adiciona o número digitado ao display
        
        document.getElementById('display').value = valorButton 

    } else { // Se já ouver um número no display, adiciona um novo número 
        
        const novoValorDisplay = valorDisplay + valorButton
        document.getElementById('display').value = novoValorDisplay 
    }
}

function operacao(id) { 

    let valorDisplay = document.getElementById('display').value 
    let valorDisplayConta = document.getElementById('display-conta').value

    const virgula = document.getElementById(".");
    virgula.disabled = false;

    if(valorDisplayConta == ''){ 

        document.getElementById('display-conta').value = valorDisplay + ' ' + id
        document.getElementById('display').value = 0
        valorDisplayConta = document.getElementById('display-conta').value

    } else if(valorDisplayConta.includes('=')) { 
        //valorDisplayConta.charAt(valorDisplayConta.length-3) == '=' if a cima (teste)

        document.getElementById('display-conta').value = valorDisplay + ' ' + id
        document.getElementById('display').value = 0

    } else {

        valorDisplayConta = valorDisplayConta.replace(valorDisplayConta.charAt(valorDisplayConta.length-1), id)
        document.getElementById('display-conta').value = valorDisplayConta
    } 

}

function divPorX() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = 1 / display
    document.getElementById('display-conta').value = `1/(${display})`

}

function elevado() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = display ** 2
    document.getElementById('display-conta').value = `sqr(${display})`
}

function raizQuadrada() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = Math.sqrt(display)
    document.getElementById('display-conta').value = `√(${display})`
}

function calcular(id) {
    let num1 = document.getElementById('display-conta').value
    let num2 = document.getElementById('display').value

    const virgula = document.getElementById(".");
    virgula.disabled = false;

    if(num1 == '' && num2 == '0'){
        document.getElementById('display').value = 0
    } else if(num1 == '' && num2 != '0'){
        document.getElementById('display').value = num2
    } else {
        switch (num1.charAt(num1.length-1)) {
            case '+':
                var resposta = parseFloat(num1) + parseFloat(num2)
                var contaDisplay = `${num1} ${num2} ${id}  `
                break
            case '-':
                var resposta = parseFloat(num1) - parseFloat(num2)
                var contaDisplay = `${num1} ${num2} ${id}  `
                break
            case 'x':
                var resposta = parseFloat(num1) * parseFloat(num2)
                var contaDisplay = `${num1} ${num2} ${id}  `
                break
            case '÷':
                var resposta = parseFloat(num1) / parseFloat(num2)
                var contaDisplay = `${num1} ${num2} ${id}  `
                break 
        }

        document.getElementById('display').value = resposta
        document.getElementById('display-conta').value = contaDisplay
    }
}