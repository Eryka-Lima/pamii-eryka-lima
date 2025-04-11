function SomaSimples () {
    return 3 + 4 
}

console.log(SomaSimples())

function SomaComParametros (n1, n2){
    return n1 + n2
}

console.log(SomaComParametros(3, 4))
console.log(SomaComParametros(10, 4))

//Função Anônima
//Arrow Function
const Potencia = (n, e) => {
    console.log(`${n} elevado a ${e} é ${Math.pow(n, e)}`)
}

Potencia (3,2)

//Função que calcule a média do aluno e exiba o resultado
// media >= 6,00 = Aprovado
// media >= 4,00 || < 6,00 = Recuperação
// media < 4,00 = Reprovado

//function media(numeros) { return numeros.reduce((a, b) => a + b, 0)/ numeros.length;}

function media(numeros) {
    if (numeros.length === 0){
        return 0;
    }
    return numeros.reduce((a, b) => a + b, 0) / numeros.length; 
}
    const notas = [4,6,8,10]
    const mediaDasNotas = media(notas);
    console.log("A media das notas é: ", mediaDasNotas);

    //CORREÇÃO JOÃO 
    const ResultadoMedia = (n1, n2) => {
        let media = (n1 + n2)/2

        if (media < 4.00) {
            return 'Reprovado'
        } else if (media < 6.00) {
            return 'Recuperação'
        } else {
            return 'Aprovado'
        }
    }
    console.log(ResultadoMedia(6.00, 4.00))


    //CORREÇÃO JOÃO II
    const ResultadoMediaII = (n1, n2) => {
        let media = (n1 + n2)/2

        if (media >= 6.00) {
            return 'Aprovado'
        } else if (media >= 4.00) {
            return 'Recuperação'
        } else {
            return 'Reprovado'
        }
    }
    console.log(ResultadoMediaII(4.00, 4.00))

    //CORREÇÃO JOÃO III
    const ResultadoMediaIII = (n1, n2) => {
        let media = (n1 + n2)/2

        if (media < 4.00) {
            return 'Reprovado'
        } 
        
        if (media < 6.00) {
            return 'Recuperação'
        } 
        
       return "Aprovado"
    }
    console.log(ResultadoMediaIII(6.00, 7.00))

    //SWITCH CASE -- PODE SER UTILIZADO QUANDO TEMOS MAIS DE UM PARÂMETRO
   