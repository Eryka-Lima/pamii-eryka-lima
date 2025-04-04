let palavra01 = "Quero";
let palavra02 = "um";
let palavra03 = "milagre";

//APRENDENDO A CONCATERNAR

console.log(palavra01, palavra02, palavra03);
console.log(palavra01 + palavra02 + palavra03);

//esses dois metodos são os piores para concatenar
//a mensagem de erro será seu AMIGO 

console.log(`${palavra01} ${palavra02} ${palavra03}♥
           /n ♣♥♥♥♥`);

console.log(palavra01, "um", palavra03);
console.log(palavra01 + " um " + palavra03);
console.log(`${palavra01} um ${palavra03}`);
// Esses parâmetros nos ajudam da melhor forma possível para fazer com que o código se torne "PADRONIZADO"
// Otimo para apresentar ao lider técnico

