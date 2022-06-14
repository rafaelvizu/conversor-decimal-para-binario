function convertorBinario(valorDecimal) {
    if (valorDecimal == 0) {
        return "0"
    } else if (valorDecimal < 0) {
        return "Coloque um valor positivo!"
    } else {
        let str = [], cont = 0
        while (valorDecimal > 0) {
            str.unshift("" + valorDecimal%2)
            valorDecimal = Math.floor(valorDecimal/2)
            if (cont == 3 && valorDecimal != 0) {
                str.unshift(" ")
                cont = 0
            } else {
                cont++
            }
        }
        let valor = ""
        str.forEach(value => {valor += value});
        return valor
    }
}

function criarElemento(tipo, id, alvoID) {
    let alvo = document.querySelector(alvoID)
    let elemento = document.createElement(tipo)
    elemento.setAttribute('id', id)
    alvo.appendChild(elemento)
}

function maquinaEscreverAnimation(txt, elemento, time=75) {
    for (let i=0; i < txt.length; i++) {
        setTimeout(() => {
            let letra = document.createTextNode(txt[i])
            elemento.appendChild(letra)
        }, time * i);
    
    }
}

let valorAnterior, click = 0


const btn = document.querySelector("#converter")

btn.addEventListener("click", function(e) {
    e.preventDefault()

    const valorDecimal = Math.floor((document.querySelector("#inputValor")).value)
    const bin = convertorBinario(valorDecimal)

    if (click == 0) {
        criarElemento("p", "pResultado", "#resultado")

        const elementoPos = document.querySelector("#pResultado")
        maquinaEscreverAnimation(bin, elementoPos, 20)

        valorAnterior = valorDecimal
    } else if (valorAnterior != valorDecimal) {
        // excluindo elemento
        const elementoPos1 = document.querySelector("#pResultado")
        elementoPos1.parentNode.removeChild(elementoPos1)

        // criando elemento novamente
        criarElemento("p", "pResultado", "#resultado")
        const elementoPos2 = document.querySelector("#pResultado")
       maquinaEscreverAnimation(bin, elementoPos2, 20)
       
        valorAnterior = valorDecimal
    }

    click++
    
})


