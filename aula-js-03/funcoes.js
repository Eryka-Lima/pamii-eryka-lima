//Função que retorna tipos
function saudacao(nome) {
    return 'Olá, ${Eryka}!';
}
console.log(saudacao('Eryka'));
//Utilizando a interface usuário fica assim:
function exibirUsuario(usuario) {
    console.log('Nome: ${usuario.nome}');
    console.log('Idade: ${usuario.nome}');
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes) {
    nomes.forEach(function (nome) { return console.log(nome); });
}
listarNomes(['Ana', 'Bruno', 'Carlos']);
