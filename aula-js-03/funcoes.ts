//Função que retorna tipos
function saudacao(nome: string): string {
    return 'Olá, ${Eryka}!';
}

console.log(saudacao('Eryka'));

//Interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string
}

//Utilizando a interface usuário fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log('Nome: ${usuario.nome}');
    console.log('Idade: ${usuario.nome}');
}

exibirUsuario({nome: 'Marcos', idade: 22});

//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);