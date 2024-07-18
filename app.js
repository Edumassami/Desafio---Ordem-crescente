function organizar() {
    let primeiroNumero = parseInt(document.getElementById('numero-1').value);
    let segundoNumero = parseInt(document.getElementById('numero-2').value);
    let terceiroNumero = parseInt(document.getElementById('numero-3').value);
    
    if(primeiroNumero > segundoNumero) {
        if (primeiroNumero > terceiroNumero) {
            if (segundoNumero > terceiroNumero){
                resultado = document.getElementById('resultado');
                resultado.innerHTML = `<label class="texto__paragrafo">Números em ordem crescente: ${terceiroNumero}, ${segundoNumero} e ${primeiroNumero}</label>`
            } else {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = `<label class="texto__paragrafo">Números em ordem crescente: ${segundoNumero}, ${terceiroNumero} e ${primeiroNumero}</label>`

            }
        } else {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = `<label class="texto__paragrafo">Números em ordem crescente: ${segundoNumero}, ${primeiroNumero} e ${terceiroNumero}</label>`
        }
    } else if (segundoNumero > terceiroNumero) {
        if (primeiroNumero > terceiroNumero) {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = `<label class="texto__paragrafo">Números em ordem crescente: ${terceiroNumero}, ${primeiroNumero} e ${segundoNumero}</label>`
        } else {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = `<label class="texto__paragrafo">Números em ordem crescente: ${primeiroNumero}, ${terceiroNumero} e ${segundoNumero}</label>`
        } 

    } else {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números em ordem crescente: ${primeiroNumero}, ${segundoNumero} e ${terceiroNumero}</label>`
}

}